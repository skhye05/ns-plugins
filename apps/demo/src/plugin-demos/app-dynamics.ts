import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppDynamics } from '@demo/shared';
import { } from '@skhye05/app-dynamics';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAppDynamics {
	
}
