import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPluginBadge } from '@demo/shared';
import { } from '@skhye05/plugin-badge';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPluginBadge {
	constructor() {
		super();
		this.requestPermission();
	}

}
