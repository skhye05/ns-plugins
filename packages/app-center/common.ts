export interface InitOption {
    analytics?: boolean;
    crashes?: boolean;
    appSecret: string;
}

export interface AuthUser {
    accessToken: string;
    accountId: string;
    idToken: string;
}

export interface TrackEventOption {
    eventName: string;
    properties?: any;
}

export interface PropertyOption {
    key: string;
    value: string;
}

export interface AnalyticsListener {
    onBeforeSending?: (log: any) => void;
    onSendingFailed?: (log: any, e: any) => void;
    onSendingSucceeded?: (log: any) => void;
}
export interface CrashesListener {
    shouldProcess?: (report: ErrorReport) => boolean;
    shouldAwaitUserConfirmation?: () => boolean;
    getErrorAttachments?: (report: ErrorReport) => Array<any> | any;
    onBeforeSending?: (report: ErrorReport) => void;
    onSendingFailed?: (report: ErrorReport, e: any) => void;
    onSendingSucceeded?: (report: ErrorReport) => void;
}

export interface ErrorReport {
    /**
     * get the UUID for crash report.
     */
    incidentIdentifier: string;

    /**
     * get the application start datetime.
     */
    appStartTime: Date;

    /**
     * get the application error datetime.
     */
    appErrorTime: Date;

    /**
     * get the android native error report.
     */
    android?: any;

    /**
     * get the ios native error report.
     */
    ios?: any;

}
