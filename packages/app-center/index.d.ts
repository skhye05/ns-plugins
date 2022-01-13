import { InitOption, PropertyOption, CrashesListener, AnalyticsListener, ErrorReport } from './common';

export { InitOption, PropertyOption, CrashesListener, AnalyticsListener, ErrorReport } from './common';
export declare class AppCenter {
    constructor(appSecret?: string);
    start(option: InitOption, useInDelegate?: boolean): void;
    requestWhenInUseAuthorization(): Promise<any>;
    setUserId(userID: string): void;
    trackEvent(eventName: string, properties?: Array<PropertyOption>): void;
    pause(): void;
    resume(): void;
    setTransmissionInterval(interval: number): void;
    setAnalyticsEnabled(arg: boolean): void;
    isAnalyticsEnabled(): Promise<boolean>;
    isAnalyticsEnabledSync(): boolean;
    onAnalyticsListener(callbacks: AnalyticsListener): void;
    testCraches(): void;
    testCraches2(): void;
    onCrashesListener(callbacks: CrashesListener): void;
    beforeSavingCrashes(callback: () => void): void;
    isCrashedEnabled(): Promise<boolean>;
    isCrashedEnabledSync(): boolean;
    setCrashesEnabled(arg: boolean): void;
    setNotifyUserConfirmation(userConfirmation: USER_CONFIRMATION): any;
    hasCrashedInLastSession(): Promise<boolean>;
    hasCrashedInLastSessionSync(): boolean;
    hasReceivedMemoryWarningInLastSession(): Promise<boolean>;
    hasReceivedMemoryWarningInLastSessionSync(): boolean;
    getLastSessionCrashReport(): ErrorReport;
    trackError(exceptionMessage: string, properties?: Array<PropertyOption>, attachments?: any[]): Promise<boolean>;
    trackErrorSub(exceptionMessage: string, properties?: Array<PropertyOption>, attachments?: any[]): Promise<any>;

}

export declare enum USER_CONFIRMATION {
    DONT_SEND,
    SEND,
    ALWAYS_SEND
}

export declare const ACErrorAttachmentLog: {
    attachmentWithText(text: string, filename: string): any;
};

export declare const toAttachmentList: (attachments: any[]) => any;
