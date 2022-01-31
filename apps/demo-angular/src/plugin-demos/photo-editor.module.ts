import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PhotoEditorComponent } from './photo-editor.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PhotoEditorComponent }])],
  declarations: [PhotoEditorComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class PhotoEditorModule {}
