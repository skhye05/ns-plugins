import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AppDynamicsComponent } from './app-dynamics.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AppDynamicsComponent }])],
  declarations: [AppDynamicsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppDynamicsModule {}
