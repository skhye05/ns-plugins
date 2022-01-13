import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AppCenterComponent } from './app-center.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AppCenterComponent }])],
  declarations: [AppCenterComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppCenterModule {}
