import { DemoSharedAppCenter } from '@demo/shared';
import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from './app.module';

import { test } from "@skhye05/app-dynamics"

// DemoSharedAppCenter.Instance.initAppCenter();

test();
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
