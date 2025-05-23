// npx vitest --globals run src/__tests__/index.test.ts

import { generatePackageJson } from "../index.js"

describe("generatePackageJson", () => {
	it("should be a test", () => {
		const generatedPackageJson = generatePackageJson({
			packageJson: {
				name: "roo-vibecoding",
				displayName: "%extension.displayName%",
				description: "%extension.description%",
				publisher: "RooVeterinaryInc",
				version: "3.17.2",
				icon: "assets/icons/icon.png",
				contributes: {
					viewsContainers: {
						activitybar: [
							{
								id: "roo-vibecoding-ActivityBar",
								title: "%views.activitybar.title%",
								icon: "assets/icons/icon.svg",
							},
						],
					},
					views: {
						"roo-vibecoding-ActivityBar": [
							{
								type: "webview",
								id: "roo-vibecoding.SidebarProvider",
								name: "",
							},
						],
					},
					commands: [
						{
							command: "roo-vibecoding.plusButtonClicked",
							title: "%command.newTask.title%",
							icon: "$(add)",
						},
						{
							command: "roo-vibecoding.openInNewTab",
							title: "%command.openInNewTab.title%",
							category: "%configuration.title%",
						},
					],
					menus: {
						"editor/context": [
							{
								submenu: "roo-vibecoding.contextMenu",
								group: "navigation",
							},
						],
						"roo-vibecoding.contextMenu": [
							{
								command: "roo-vibecoding.addToContext",
								group: "1_actions@1",
							},
						],
						"editor/title": [
							{
								command: "roo-vibecoding.plusButtonClicked",
								group: "navigation@1",
								when: "activeWebviewPanelId == roo-vibecoding.TabPanelProvider",
							},
							{
								command: "roo-vibecoding.settingsButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == roo-vibecoding.TabPanelProvider",
							},
						],
					},
					submenus: [
						{
							id: "roo-vibecoding.contextMenu",
							label: "%views.contextMenu.label%",
						},
						{
							id: "roo-vibecoding.terminalMenu",
							label: "%views.terminalMenu.label%",
						},
					],
					configuration: {
						title: "%configuration.title%",
						properties: {
							"roo-vibecoding.allowedCommands": {
								type: "array",
								items: {
									type: "string",
								},
								default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
								description: "%commands.allowedCommands.description%",
							},
							"roo-vibecoding.customStoragePath": {
								type: "string",
								default: "",
								description: "%settings.customStoragePath.description%",
							},
						},
					},
				},
				scripts: {
					lint: "eslint **/*.ts",
				},
			},
			overrideJson: {
				name: "roo-vibecoding-nightly",
				displayName: "Roo Code Nightly",
				publisher: "RooVeterinaryInc",
				version: "0.0.1",
				icon: "assets/icons/icon-nightly.png",
				scripts: {},
			},
			substitution: ["roo-vibecoding", "roo-vibecoding-nightly"],
		})

		expect(generatedPackageJson).toStrictEqual({
			name: "roo-vibecoding-nightly",
			displayName: "Roo Code Nightly",
			description: "%extension.description%",
			publisher: "RooVeterinaryInc",
			version: "0.0.1",
			icon: "assets/icons/icon-nightly.png",
			contributes: {
				viewsContainers: {
					activitybar: [
						{
							id: "roo-vibecoding-nightly-ActivityBar",
							title: "%views.activitybar.title%",
							icon: "assets/icons/icon.svg",
						},
					],
				},
				views: {
					"roo-vibecoding-nightly-ActivityBar": [
						{
							type: "webview",
							id: "roo-vibecoding-nightly.SidebarProvider",
							name: "",
						},
					],
				},
				commands: [
					{
						command: "roo-vibecoding-nightly.plusButtonClicked",
						title: "%command.newTask.title%",
						icon: "$(add)",
					},
					{
						command: "roo-vibecoding-nightly.openInNewTab",
						title: "%command.openInNewTab.title%",
						category: "%configuration.title%",
					},
				],
				menus: {
					"editor/context": [
						{
							submenu: "roo-vibecoding-nightly.contextMenu",
							group: "navigation",
						},
					],
					"roo-vibecoding-nightly.contextMenu": [
						{
							command: "roo-vibecoding-nightly.addToContext",
							group: "1_actions@1",
						},
					],
					"editor/title": [
						{
							command: "roo-vibecoding-nightly.plusButtonClicked",
							group: "navigation@1",
							when: "activeWebviewPanelId == roo-vibecoding-nightly.TabPanelProvider",
						},
						{
							command: "roo-vibecoding-nightly.settingsButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == roo-vibecoding-nightly.TabPanelProvider",
						},
					],
				},
				submenus: [
					{
						id: "roo-vibecoding-nightly.contextMenu",
						label: "%views.contextMenu.label%",
					},
					{
						id: "roo-vibecoding-nightly.terminalMenu",
						label: "%views.terminalMenu.label%",
					},
				],
				configuration: {
					title: "%configuration.title%",
					properties: {
						"roo-vibecoding-nightly.allowedCommands": {
							type: "array",
							items: {
								type: "string",
							},
							default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
							description: "%commands.allowedCommands.description%",
						},
						"roo-vibecoding-nightly.customStoragePath": {
							type: "string",
							default: "",
							description: "%settings.customStoragePath.description%",
						},
					},
				},
			},
			scripts: {},
		})
	})
})
