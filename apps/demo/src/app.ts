import { DemoSharedAppCenter } from '@demo/shared';
import { Application } from '@nativescript/core';

DemoSharedAppCenter.Instance.initAppCenter();

Application.run({ moduleName: 'app-root' });
