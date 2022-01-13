import { ACErrorAttachmentLog, AppCenter, ErrorReport, PropertyOption, toAttachmentList } from '@skhye05/app-center';
import { isIOS } from '@nativescript/core';

const APP_CENTER_KEY = isIOS ? '' : '';
export class DemoSharedAppCenter {
  private appCenter: AppCenter;
  private static _instance: DemoSharedAppCenter;

  constructor() {
    this.appCenter = new AppCenter();
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  initAppCenter() {


    this.appCenter.onAnalyticsListener({
      onBeforeSending: (report: any) => {
        // Before sending
      },
      onSendingFailed: (log: any) => {
        // On Failed sending
      },
      onSendingSucceeded: (log: any) => {
        // On Sending Successful
      }
    });

    // Crashes Callbacks
    this.appCenter.onCrashesListener({
      shouldProcess: (report: any) => {
        return true;
      },
      shouldAwaitUserConfirmation: () => {
        return false;
      },
      getErrorAttachments: (report: ErrorReport) => {
        const attachment1 = ACErrorAttachmentLog.attachmentWithText('getErrorAttachments', 'text.txt');
        return toAttachmentList([attachment1]);
      },
      onBeforeSending: (report: any) => {
        setTimeout(() => {
          console.log('onBeforeSending');
        }, 5000);
      },
      onSendingFailed: (report: any, e: any) => {
        setTimeout(() => {
          console.log('onSendingFailed');
        }, 5000);
      },
      onSendingSucceeded: (report: any) => {
        setTimeout(() => {
          console.log('onSendingSucceeded send app center');
        }, 5000);
      }
    });

    setTimeout(() => {
      this.appCenter.start({
        analytics: true,
        crashes: true,
        appSecret: APP_CENTER_KEY
      }, false);

      this.appCenter.requestWhenInUseAuthorization();
    }, 500);
  }

  onInit(): void {
    this.appCenter.isCrashedEnabled().then(enabled => {
      console.log('Crash is enabled: ', enabled);
      if (!enabled) {
        this.appCenter.setCrashesEnabled(true);
      }
    });

    this.appCenter.hasCrashedInLastSession().then(hasCrashed => {
      console.log('App has is crashed: ', hasCrashed);
    });
  }

  testTrackError() {
    const properties: Array<PropertyOption> = new Array<PropertyOption>();
    properties.push({ key: "test-email", value: "example@email.com" });
    properties.push({ key: "test-error-name", value: "error name" });
    const text = `App Center error text...`;

    const attachment = ACErrorAttachmentLog.attachmentWithText(text, 'error.txt');

    this.appCenter.trackError('Error', properties, [attachment]).then((response) => {
      console.log('response-->', response);
    }, (error) => {
      console.log('error-->', error);
    });
  }

  testTrackEvent(): void {
    let property: Array<PropertyOption> = new Array<PropertyOption>();
    property.push({ key: "name", value: "nativescript" }, { key: "plugins", value: "app-center" });
    this.appCenter.trackEvent('WhichPlugin', property);
  }

  testCrash(): void {
    this.appCenter.testCraches2();
  }

  testIt() {
    console.log('test app-center!');
  }
}