import { DemoSharedAppCenter } from '@demo/shared';
import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from './app.module';

DemoSharedAppCenter.Instance.initAppCenter();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});