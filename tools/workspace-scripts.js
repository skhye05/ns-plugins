module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
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
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@skhye05/* packages will keep your ⚙️ cranking"`,
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
      // @skhye05/app-dynamics
      'app-dynamics': {
        build: {
          script: 'nx run app-dynamics:build.all',
          description: '@skhye05/app-dynamics: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
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
      'app-dynamics': {
        script: 'nx run app-dynamics:focus',
        description: 'Focus on @skhye05/app-dynamics',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
