const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'๐ง': {
			script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
				description: ` ๐ป Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` ๐ป Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
		},
		'โ๏ธ': {
			script: `npx cowsay "@skhye05/* packages will keep your โ๏ธ cranking"`,
			description: '_____________  @skhye05/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@skhye05': {
			// @skhye05/app-center
			'app-center': {
				build: {
					script: 'nx run app-center:build.all',
					description: '@skhye05/app-center: Build',
				},
			},
			// @skhye05/photo-editor
			'photo-editor': {
				build: {
					script: 'nx run photo-editor:build.all',
					description: '@skhye05/photo-editor: Build',
				},
			},
			// @skhye05/plugin-badge
			'plugin-badge': {
				build: {
					script: 'nx run plugin-badge:build.all',
					description: '@skhye05/plugin-badge: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'โก': {
			script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'app-center': {
				script: 'nx run app-center:focus',
				description: 'Focus on @skhye05/app-center',
			},
			'photo-editor': {
				script: 'nx run photo-editor:focus',
				description: 'Focus on @skhye05/photo-editor',
			},
			'plugin-badge': {
				script: 'nx run plugin-badge:focus',
				description: 'Focus on @skhye05/plugin-badge',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			}
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
