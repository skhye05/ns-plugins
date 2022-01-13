
import { InitOption, ErrorReport, PropertyOption, CrashesListener, AnalyticsListener } from './common';
import { ad } from '@nativescript/core/utils';

const convertNativeReportModel: (originalReport: com.microsoft.appcenter.crashes.model.ErrorReport) => ErrorReport = (originalReport: com.microsoft.appcenter.crashes.model.ErrorReport) => {
    return {
        incidentIdentifier: originalReport.getId(),
        appStartTime: new Date(originalReport.getAppStartTime().toString()),
        appErrorTime: new Date(originalReport.getAppErrorTime().toString()),
        android: originalReport
    };
}

export class AppCenter {

    constructor(private appSecret?: string) { }

    public start(option: InitOption, useInDelegate: boolean = true): void {
        try {
            const classes = new Array<any>();

            if (option.analytics) {
                classes.push(com.microsoft.appcenter.analytics.Analytics.class);
            }

            if (option.crashes) {
                classes.push(com.microsoft.appcenter.crashes.Crashes.class);
            }

            setTimeout(() => {
                com.microsoft.appcenter.AppCenter.start(ad.getApplication(), option.appSecret, classes);
            }, 200);
        } catch (e) {
            return null;
        }
    }

    public requestWhenInUseAuthorization(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                resolve(true);
            } catch (e) {
                reject(e);
            }
        });
    }

    public setUserId(userID: string): void {
        com.microsoft.appcenter.AppCenter.setUserId(userID);
    }

    // analytics methods
    public trackEvent(eventName: string, properties?: Array<PropertyOption>): void {
        try {
            if (properties) {
                let _properties: any = new java.util.HashMap();

                properties.forEach(property => {
                    _properties.put(property.key, property.value);
                });

                com.microsoft.appcenter.analytics.Analytics.trackEvent(eventName, _properties);
            } else {
                com.microsoft.appcenter.analytics.Analytics.trackEvent(eventName);
            }
        } catch (e) {
            return null;
        }
    }

    public pause(): void {
        try {
            com.microsoft.appcenter.analytics.Analytics.pause();
        } catch (e) {
            return null;
        }
    }

    public resume(): void {
        try {
            com.microsoft.appcenter.analytics.Analytics.resume();
        } catch (e) {
            return null;
        }
    }

    public setTransmissionInterval(interval: number): void {
        try {
            com.microsoft.appcenter.analytics.Analytics.setTransmissionInterval(interval);
        } catch (e) {
            return null;
        }
    }

    public setAnalyticsEnabled(arg: boolean): void {
        try {
            com.microsoft.appcenter.analytics.Analytics.setEnabled(arg);
        } catch (e) {
            return null;
        }
    }

    public isAnalyticsEnabled(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                const value: boolean = com.microsoft.appcenter.analytics.Analytics.isEnabled().get().booleanValue();
                resolve(value);
            } catch (e) {
                reject(e);
            }
        });
    }

    public isAnalyticsEnabledSync(): boolean {
        try {
            return com.microsoft.appcenter.analytics.Analytics.isEnabled().get().booleanValue();
        } catch (e) {
            return null;
        }
    }

    public onAnalyticsListener(callbacks: AnalyticsListener): void {
        try {
            let listener = new AnalyticsListenerImplementation(callbacks);
            com.microsoft.appcenter.analytics.Analytics.setListener(listener);
        } catch (e) {
            return null;
        }

    }

    // Crashes methods
    public testCraches(): void {
        com.microsoft.appcenter.crashes.Crashes.generateTestCrash();
        return null;
    }

    public testCraches2(): void {
        throw new java.lang.RuntimeException("crashing");
    }

    public onCrashesListener(callbacks: CrashesListener): void {
        try {
            let abstractListener = new CrashesListenerImplementation(callbacks);
            com.microsoft.appcenter.crashes.Crashes.setListener(abstractListener);
        } catch (e) {
            return null;
        }
    }

    public beforeSavingCrashes(callback: () => void): void {
        try {
            com.microsoft.appcenter.crashes.Crashes.isEnabled().thenAccept(new com.microsoft.appcenter.utils.async.AppCenterConsumer<java.lang.Boolean>({
                accept(isEnabled) {
                    if (isEnabled) {
                        const implementation = new UncaughtExceptionHandlerCustomImplementation(callback);
                        implementation.register();
                        java.lang.Thread.setDefaultUncaughtExceptionHandler(implementation);
                    }
                }
            }));
        } catch (e) {
            return null;
        }
    }

    public isCrashedEnabled(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(com.microsoft.appcenter.crashes.Crashes.isEnabled().get().booleanValue());
            } catch (e) {
                reject(e);
            }
        });
    }

    public isCrashedEnabledSync(): boolean {
        try {
            return com.microsoft.appcenter.crashes.Crashes.isEnabled().get().booleanValue();
        } catch (e) {
            return null;
        }
    }

    public setCrashesEnabled(arg: boolean): void {
        try {
            com.microsoft.appcenter.crashes.Crashes.setEnabled(arg);
        } catch (e) {
            return null;
        }
    }

    public setNotifyUserConfirmation(userConfirmation: USER_CONFIRMATION) {
        try {
            com.microsoft.appcenter.crashes.Crashes.notifyUserConfirmation(userConfirmation);
        } catch (e) {
            return null;
        }
    }

    public hasCrashedInLastSession(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(com.microsoft.appcenter.crashes.Crashes.hasCrashedInLastSession().get().booleanValue());
            } catch (e) {
                reject(e);
            }
        });
    }

    public hasCrashedInLastSessionSync(): boolean {
        try {
            return com.microsoft.appcenter.crashes.Crashes.hasCrashedInLastSession().get().booleanValue();
        } catch (e) {
            return null;
        }
    }

    public hasReceivedMemoryWarningInLastSession(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(com.microsoft.appcenter.crashes.Crashes.hasReceivedMemoryWarningInLastSession().get().booleanValue());
            } catch (e) {
                reject(e);
            }
        });
    }

    public hasReceivedMemoryWarningInLastSessionSync(): boolean {
        try {
            return com.microsoft.appcenter.crashes.Crashes.hasReceivedMemoryWarningInLastSession().get().booleanValue();
        } catch (e) {
            return null;
        }
    }

    public getLastSessionCrashReport(): ErrorReport {
        try {
            return convertNativeReportModel(com.microsoft.appcenter.crashes.Crashes.getLastSessionCrashReport().get());
        } catch (e) {
            return null;
        }
    }

    public trackError(exceptionMessage: string, properties?: Array<PropertyOption>, attachments?: any[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                const error = new java.lang.Exception('Error: ', new java.lang.Throwable(exceptionMessage));
                if (properties && properties.length > 0) {
                    let _properties: any = new java.util.HashMap<String, string>();

                    properties.forEach(property => {
                        _properties.put(property.key, property.value);
                    });

                    com.microsoft.appcenter.crashes.Crashes.trackError(error, _properties, attachments ? java.util.Arrays.asList(attachments) : null);
                } else {
                    com.microsoft.appcenter.crashes.Crashes.trackError(error);
                }

                resolve(true);
            } catch (e) {
                reject(e);
            }
        });
    }

    public trackErrorSub(): Promise<boolean> {
        return Promise.reject('Not Implemented for android');
    }
}

@Interfaces([com.microsoft.appcenter.crashes.CrashesListener])
class CrashesListenerImplementation extends java.lang.Object implements com.microsoft.appcenter.crashes.CrashesListener {
    private callbacks: CrashesListener;

    constructor(callbacks: CrashesListener) {
        super();
        this.callbacks = callbacks;
        return global.__native(this);
    }

    public onSendingFailed(errorReport: com.microsoft.appcenter.crashes.model.ErrorReport, e: java.lang.Exception): void {
        if (this.callbacks.onSendingFailed) {
            this.callbacks.onSendingFailed(convertNativeReportModel(errorReport), e);
        }
    }

    public getErrorAttachments(errorReport: com.microsoft.appcenter.crashes.model.ErrorReport): any {
        if (this.callbacks.getErrorAttachments) {
            return this.callbacks.getErrorAttachments(convertNativeReportModel(errorReport));
        }
        return toAttachmentList([]);
    }

    public shouldProcess(errorReport: com.microsoft.appcenter.crashes.model.ErrorReport): boolean {
        if (this.callbacks.shouldProcess) {
            return this.callbacks.shouldProcess(convertNativeReportModel(errorReport));
        }

        return true;
    }

    public onSendingSucceeded(errorReport: com.microsoft.appcenter.crashes.model.ErrorReport): void {
        if (this.callbacks.onSendingSucceeded) {
            this.callbacks.onSendingSucceeded(convertNativeReportModel(errorReport));
        }
    }

    public onBeforeSending(errorReport: com.microsoft.appcenter.crashes.model.ErrorReport): void {
        if (this.callbacks.onBeforeSending) {
            this.callbacks.onBeforeSending(convertNativeReportModel(errorReport));
        }
    }

    public shouldAwaitUserConfirmation(): boolean {
        if (this.callbacks.shouldAwaitUserConfirmation) {
            return this.callbacks.shouldAwaitUserConfirmation();
        }
        return false;
    }
}

@Interfaces([com.microsoft.appcenter.analytics.channel.AnalyticsListener])
class AnalyticsListenerImplementation extends java.lang.Object implements com.microsoft.appcenter.analytics.channel.AnalyticsListener {
    private callbacks: AnalyticsListener;

    constructor(callbacks: AnalyticsListener) {
        super();
        this.callbacks = callbacks;
        return global.__native(this);
    }

    public onBeforeSending(log: any): void {
        if (this.callbacks.onBeforeSending) {
            this.callbacks.onBeforeSending(log);
        }
    }

    public onSendingFailed(log: any, exception: any): void {
        if (this.callbacks.onSendingFailed) {
            this.callbacks.onSendingFailed(log, exception);
        }
    }

    public onSendingSucceeded(log: any): void {
        if (this.callbacks.onSendingSucceeded) {
            this.callbacks.onSendingSucceeded(log);
        }
    }
}
@Interfaces([java.lang.Thread.UncaughtExceptionHandler])
class UncaughtExceptionHandlerCustomImplementation extends java.lang.Object implements java.lang.Thread.UncaughtExceptionHandler {
    public mDefaultUncaughtExceptionHandler: java.lang.Thread.UncaughtExceptionHandler;
    private callbacks;

    constructor(callbacks: () => void) {
        super();
        this.callbacks = callbacks;
        return global.__native(this);
    }

    public uncaughtException(thread, exception): void {
        if (this.callbacks) {
            this.callbacks();
        }

        const model = com.microsoft.appcenter.crashes.Crashes.getInstance().saveUncaughtException(thread, exception);



        if (this.mDefaultUncaughtExceptionHandler) {
            this.mDefaultUncaughtExceptionHandler.uncaughtException(thread, exception);
        }
    }

    register(): void {
        this.mDefaultUncaughtExceptionHandler = java.lang.Thread.getDefaultUncaughtExceptionHandler();
    }
}

export enum USER_CONFIRMATION {
    DONT_SEND = com.microsoft.appcenter.crashes.Crashes.DONT_SEND,
    SEND = com.microsoft.appcenter.crashes.Crashes.SEND,
    ALWAYS_SEND = com.microsoft.appcenter.crashes.Crashes.ALWAYS_SEND,
}

export const ACErrorAttachmentLog = {
    attachmentWithText(text: string, filename: string) {
        return com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog.attachmentWithText(text, filename);
    }
}

export const toAttachmentList = (attachments: any[]) => {
    return java.util.Arrays.asList(attachments);
}

