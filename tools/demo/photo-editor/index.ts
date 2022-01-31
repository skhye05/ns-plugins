import { DemoSharedBase } from '../utils';
import { PhotoEditor, PhotoEditorControl } from '@skhye05/photo-editor';
import { ImageSource, Image } from '@nativescript/core';

export class DemoSharedPhotoEditor {
  public resultImage: Image;
  public originalImage: Image;
  public path: string = "res://test";


  public canClear: boolean = false;
  public canCrop: boolean = false;
  public canDraw: boolean = false;
  public canText: boolean = false;

  editImage() {
    const photoEditor = new PhotoEditor();
    const imageSource = ImageSource.fromFileOrResourceSync(this.path);
    const hiddenControls = [];

    if (this.canClear) {
      hiddenControls.push(PhotoEditorControl.Clear);
    }

    if (this.canCrop) {
      hiddenControls.push(PhotoEditorControl.Crop);
    }

    if (this.canDraw) {
      hiddenControls.push(PhotoEditorControl.Draw);
    }

    if (this.canText) {
      hiddenControls.push(PhotoEditorControl.Text);
    }

    photoEditor.editPhoto({
      imageSource: imageSource, // originalImage.imageSource,
      hiddenControls,
    }).then((newImage: ImageSource) => {
      this.resultImage.imageSource = newImage;
    }).catch((e) => {
      console.error(e);
    });
  }
}