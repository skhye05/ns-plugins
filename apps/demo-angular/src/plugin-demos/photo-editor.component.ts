import { Component, NgZone } from '@angular/core';
import { DemoSharedPhotoEditor } from '@demo/shared';
import { EventData, Switch } from '@nativescript/core';

@Component({
  selector: 'demo-photo-editor',
  templateUrl: 'photo-editor.component.html',
})
export class PhotoEditorComponent {

  demoShared: DemoSharedPhotoEditor;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPhotoEditor();
    // this.demoShared.path = "~/test-image.jpg";
  }

  onSwitchClearChanged(args: EventData) {
    const sw = args.object as Switch
    const isChecked = sw.checked;
    this.demoShared.canClear = isChecked;
  }

  onSwitchCropChanged(args: EventData) {
    const sw = args.object as Switch
    const isChecked = sw.checked;
    this.demoShared.canCrop = isChecked;
  }

  onSwitchDrawChanged(args: EventData) {
    const sw = args.object as Switch
    const isChecked = sw.checked;
    this.demoShared.canDraw = isChecked;
  }

  onSwitchTextChanged(args: EventData) {
    const sw = args.object as Switch
    const isChecked = sw.checked;
    this.demoShared.canText = isChecked;
  }

  onEdit() {
    this.demoShared.editImage();
  }

}