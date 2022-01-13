import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppCenter } from '@demo/shared';
import { } from '@skhye05/app-center';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAppCenter {
	
}
