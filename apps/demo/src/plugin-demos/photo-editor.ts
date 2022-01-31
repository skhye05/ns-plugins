import { Image, EventData, Page, Switch } from '@nativescript/core';
import { DemoSharedPhotoEditor } from '@demo/shared';
import { } from '@skhye05/photo-editor';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	const resultImage = (args.object as Page).getViewById<Image>("result-image");
	page.bindingContext = new DemoModel(resultImage);
}



export class DemoModel extends DemoSharedPhotoEditor {

	constructor(resultImage: Image) {
		super();
		this.resultImage = resultImage;
	}

	onSwitchClearLoaded(argsloaded) {
		const mySwitch = argsloaded.object as Switch
		mySwitch.on('checkedChange', args => {
			const sw = args.object as Switch
			const isChecked = sw.checked;
			this.canClear = isChecked;
		})
	}

	onSwitchCropLoaded(argsloaded) {
		const mySwitch = argsloaded.object as Switch
		mySwitch.on('checkedChange', args => {
			const sw = args.object as Switch
			const isChecked = sw.checked;
			this.canCrop = isChecked;
		})
	}

	onSwitchDrawLoaded(argsloaded) {
		const mySwitch = argsloaded.object as Switch
		mySwitch.on('checkedChange', args => {
			const sw = args.object as Switch
			const isChecked = sw.checked;
			this.canDraw = isChecked;
		})
	}

	onSwitchTextLoaded(argsloaded) {
		const mySwitch = argsloaded.object as Switch
		mySwitch.on('checkedChange', args => {
			const sw = args.object as Switch
			const isChecked = sw.checked;
			this.canText = isChecked;
		})
	}

	onEdit() {
		console.log("FFFFFF");
		this.editImage();
	}
}
