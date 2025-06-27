import { Anthropic } from "@anthropic-ai/sdk"
import { BetaThinkingConfigParam } from "@anthropic-ai/sdk/resources/beta"
import OpenAI from "openai"

import {
	ApiHandlerOptions,
	ModelRecord,
	shengSuanYunDefaultModelId,
	shengSuanYunDefaultModelInfo,
} from "../../shared/api"

import { convertToOpenAiMessages } from "../transform/openai-format"
import { ApiStreamChunk } from "../transform/stream"
import { convertToR1Format } from "../transform/r1-format"
import { addCacheBreakpoints as addAnthropicCacheBreakpoints } from "../transform/caching/anthropic"
import { addCacheBreakpoints as addGeminiCacheBreakpoints } from "../transform/caching/gemini"

import { SingleCompletionHandler } from "../index"
import { DEFAULT_HEADERS } from "./constants"
import { BaseProvider } from "./base-provider"
import { getModels } from "./fetchers/modelCache"
import { console } from "node:inspector"

// Add custom interface for ShengSuanYun params (same as OpenRouter's params)
type ShengSuanYunChatCompletionParams = OpenAI.Chat.ChatCompletionCreateParams & {
	transforms?: string[]
	include_reasoning?: boolean
	thinking?: BetaThinkingConfigParam
	reasoning?: {
		effort?: "high" | "medium" | "low"
		max_tokens?: number
		exclude?: boolean
	}
}

// Same interface as OpenRouter's CompletionUsage
interface CompletionUsage {
	completion_tokens?: number
	completion_tokens_details?: {
		reasoning_tokens?: number
	}
	prompt_tokens?: number
	prompt_tokens_details?: {
		cached_tokens?: number
	}
	total_tokens?: number
	cost?: number
}

export class ShengSuanYunHandler extends BaseProvider implements SingleCompletionHandler {
	protected options: ApiHandlerOptions
	private client: OpenAI
	protected models: ModelRecord = {}

	constructor(options: ApiHandlerOptions) {
		super()
		this.options = options
		const baseURL = "https://router.shengsuanyun.com/api/v1"
		const apiKey = this.options.shengSuanYunApiKey ?? "not-provided"
		this.client = new OpenAI({ baseURL, apiKey, defaultHeaders: DEFAULT_HEADERS })
	}

	async *createMessage(
		systemPrompt: string,
		messages: Anthropic.Messages.MessageParam[],
	): AsyncGenerator<ApiStreamChunk> {
		this.models = await getModels({ provider: "shengsuanyun" })
		let { id: modelId, info, topP } = this.getModel()
		// Convert Anthropic messages to OpenAI format.
		let openAiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
			{ role: "system", content: systemPrompt },
			...convertToOpenAiMessages(messages),
		]

		// DeepSeek highly recommends using user instead of system role.
		if (modelId.startsWith("deepseek/deepseek-r1") || modelId === "perplexity/sonar-reasoning") {
			openAiMessages = convertToR1Format([{ role: "user", content: systemPrompt }, ...messages])
		}
		// https://openrouter.ai/docs/features/prompt-caching
		if (info.supportsPromptCache) {
			if (modelId.startsWith("google")) {
				addGeminiCacheBreakpoints(systemPrompt, openAiMessages)
			} else {
				addAnthropicCacheBreakpoints(systemPrompt, openAiMessages)
			}
		}
		// Similar to OpenRouter's params
		const completionParams: ShengSuanYunChatCompletionParams = {
			model: modelId,
			...(info.maxTokens && info.maxTokens > 0 && { max_tokens: info.maxTokens }),
			top_p: topP,
			messages: openAiMessages,
			stream: true,
			stream_options: { include_usage: true },
		}

		const stream: any = await this.client.chat.completions.create(completionParams)

		let lastUsage: CompletionUsage | undefined = undefined

		for await (const chunk of stream) {
			// Returns an error object instead of the OpenAI SDK throwing an error.
			if ("error" in chunk) {
				const error = chunk.error as { message?: string; code?: number }
				console.error(`ShengSuanYun API Error: ${error?.code} - ${error?.message}`)
				throw new Error(`ShengSuanYun API Error ${error?.code}: ${error?.message}`)
			}

			const delta = chunk.choices[0]?.delta

			if ("reasoning" in delta && delta.reasoning && typeof delta.reasoning === "string") {
				yield { type: "reasoning", text: delta.reasoning }
			}

			if (delta?.content) {
				yield { type: "text", text: delta.content }
			}

			if (chunk.usage) {
				lastUsage = chunk.usage
			}
		}

		if (lastUsage) {
			yield {
				type: "usage",
				inputTokens: lastUsage.prompt_tokens || 0,
				outputTokens: lastUsage.completion_tokens || 0,
				reasoningTokens: lastUsage.completion_tokens_details?.reasoning_tokens,
				totalCost: lastUsage.cost || 0,
			}
		}
	}

	getModel() {
		const id = this.options.shengSuanYunModelId ?? shengSuanYunDefaultModelId
		let info = this.models[id] ?? shengSuanYunDefaultModelInfo
		const isDeepSeekR1 = id.startsWith("deepseek/deepseek-r1") || id === "perplexity/sonar-reasoning"
		return {
			id,
			info,
			topP: isDeepSeekR1 ? 0.95 : undefined,
		}
	}

	async completePrompt(prompt: string) {
		let { id: modelId, info } = this.getModel()
		const completionParams: ShengSuanYunChatCompletionParams = {
			model: modelId,
			max_tokens: info.maxTokens,
			messages: [{ role: "user", content: prompt }],
			stream: false,
		}

		const response = await this.client.chat.completions.create(completionParams)

		if ("error" in response) {
			const error = response.error as { message?: string; code?: number }
			throw new Error(`ShengSuanYun API Error ${error?.code}: ${error?.message}`)
		}

		const completion = response as OpenAI.Chat.ChatCompletion
		return completion.choices[0]?.message?.content || ""
	}
}
