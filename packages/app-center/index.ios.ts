import { InitOption, TrackEventOption, PropertyOption, CrashesListener, AnalyticsListener, ErrorReport } from './common';
import { Device as device, Application as application } from '@nativescript/core';
export enum HttpResponseEncoding {
    UTF8,
    GBK,
}

const convertNativeReportModel: (originalReport: MSACErrorReport) => ErrorReport = (originalReport: MSACErrorReport) => {
    return {
        incidentIdentifier: originalReport.incidentIdentifier,
        appStartTime: originalReport.appStartTime,
        appErrorTime: originalReport.appErrorTime,
        ios: originalReport
    };
}

function parseJSON(source: string): any {
    const src = source.trim();
    if (src.lastIndexOf(')') === src.length - 1) {
        return JSON.parse(src.substring(src.indexOf('(') + 1, src.lastIndexOf(')')));
    }

    return JSON.parse(src);
}

export class AppCenter {
    constructor(private appSecret?: string) { }

    public start(option: InitOption, useInDelegate: boolean = true): void {

        try {
            if (useInDelegate) {
                AppCenterDelegate.setup(option);
                application.ios.delegate = AppCenterDelegate;
            } else {
                const classes: any = NSMutableArray.alloc().init();
                if (option.analytics) {
                    classes.addObject(MSACAnalytics);
                }

                if (option.crashes) {
                    classes.addObject(MSACCrashes);
                }

                MSACAppCenter.startWithServices(option.appSecret, classes);
            }
        } catch (e) {

        }
    }

    public requestWhenInUseAuthorization(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const locationManager = CLLocationManager.new();
                locationManager.delegate = LocationDelegateManagerImplementation as any;
                locationManager.desiredAccuracy = kCLLocationAccuracyKilometer;

                locationManager.requestWhenInUseAuthorization();

                resolve(true);
            } catch (e) {
                reject(e);
            }
        });
    }

    public setUserId(userID: string): void {
        MSACAppCenter.userId = userID;
    }

    // analytics methods

    public onAnalyticsListener(callbacks?: AnalyticsListener): void { }

    public trackEvent(eventName: string, properties?: Array<PropertyOption>): void {
        try {
            if (properties) {
                let _properties: any = NSMutableDictionary.alloc().init();

                for (const property of properties) {
                    _properties.setValueForKey(property.value, property.key);
                }

                MSACAnalytics.trackEventWithProperties(eventName, _properties);
            } else {
                MSACAnalytics.trackEvent(eventName);
            }
        } catch (e) {

        }
    }

    public pause(): void {
        try {
            MSACAnalytics.pause();
        } catch (e) {
            return null;
        }
    }

    public resume(): void {
        try {
            MSACAnalytics.resume();
        } catch (e) {
            return null;
        }
    }

    public setTransmissionInterval(interval: number): void {
        try {
            MSACAnalytics.transmissionInterval = interval;
        } catch (e) {
            return null;
        }
    }

    public setAnalyticsEnabled(arg: boolean): void {
        try {
            MSACAnalytics.enabled = arg;
        } catch (e) {

        }
    }

    public isAnalyticsEnabled(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(MSACAnalytics.enabled);
            } catch (e) {
                reject(e);
            }
        });
    }

    public isAnalyticsEnabledSync(): boolean {
        try {
            return MSACAnalytics.enabled;
        } catch (e) {
            return false;
        }
    }

    // Crashes methods

    public testCraches(): void {
        MSACCrashes.generateTestCrash();
    }

    public testCraches2(): void {
        MSACCrashes.generateTestCrash();
    }

    public onCrashesListener(callbacks: CrashesListener): void {
        try {
            MSACCrashesDelegateImplementation.setCallbacks(callbacks);
            MSACCrashes.delegate = MSACCrashesDelegateImplementation as any;
        } catch (e) {

        }
    }

    public beforeSavingCrashes(callback: () => void): void {
        try {
        } catch (e) {
            return null;
        }
    }

    public isCrashedEnabled(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(MSACCrashes.enabled);
            } catch (e) {
                reject(e);
            }
        });
    }

    public isCrashedEnabledSync(): boolean {
        try {
            return MSACCrashes.enabled;
        } catch (e) {
            return null;
        }
    }

    public setCrashesEnabled(arg: boolean): void {
        try {
            MSACCrashes.enabled = arg;
        } catch (e) {
            return null;
        }
    }

    public setNotifyUserConfirmation(userConfirmation: USER_CONFIRMATION): void {
        try {
            MSACCrashes.notifyWithUserConfirmation(userConfirmation as any);
        } catch (e) {
            return null;
        }
    }

    public hasCrashedInLastSession(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(MSACCrashes.hasCrashedInLastSession);
            } catch (e) {
                reject(e);
            }
        });
    }

    public hasCrashedInLastSessionSync(): boolean {
        try {
            return MSACCrashes.hasCrashedInLastSession;
        } catch (e) {
            return false;
        }
    }

    public hasReceivedMemoryWarningInLastSession(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                resolve(MSACCrashes.hasReceivedMemoryWarningInLastSession);
            } catch (e) {
                reject(e);
            }
        });
    }

    public hasReceivedMemoryWarningInLastSessionSync(): boolean {
        try {
            return MSACCrashes.hasReceivedMemoryWarningInLastSession;
        } catch (e) {
            return null;
        }
    }

    public getLastSessionCrashReport(): any {
        try {
            return MSACCrashes.lastSessionCrashReport;
        } catch (e) {
            return null;
        }

    }

    public trackError(exceptionMessage: string, properties?: Array<PropertyOption>, attachments?: MSACErrorAttachmentLog[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                const _properties: any = NSMutableDictionary.alloc().init();
                if (properties) {
                    for (const property of properties) {
                        _properties.setValueForKey(property.value, property.key);
                    }
                }

                const userInfo: any = NSMutableDictionary.alloc().init();
                const error = NSError.alloc().initWithDomainCodeUserInfo(exceptionMessage, 101, userInfo);
                const errorId = MSACCrashes.trackErrorWithPropertiesAttachments(error, properties ? _properties : null, attachments);

                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    public trackErrorSub(exceptionMessage: string, properties?: Array<PropertyOption>, attachments?: MSACErrorAttachmentLog[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let url = NSURL.URLWithString('https://in.appcenter.ms/logs?Api-Version=1.0.0');
                const request = NSMutableURLRequest.requestWithURL(url);

                request.HTTPMethod = 'POST';
                request.addValueForHTTPHeaderField('application/json', 'Content-Type')
                request.addValueForHTTPHeaderField(this.appSecret, 'app-secret')
                request.addValueForHTTPHeaderField(device.uuid || '', 'install-id')

                let errorId = NSUUID.new().UUIDString;
                let attachmentId = NSUUID.new().UUIDString;
                let processId = NSProcessInfo.processInfo.processIdentifier;
                let bundleIdentifier = NSBundle.mainBundle.bundleIdentifier;
                let appVersion = NSBundle.mainBundle.infoDictionary['CFBundleShortVersionString'] || '';
                let appBuild = NSBundle.mainBundle.infoDictionary['CFBundleVersion'] || '';
                let sdkName = 'appcenter.custom';
                let osName = 'iOS';
                let osVersion = UIDevice.currentDevice.systemVersion;
                let model = device.model;
                let locale = NSLocale.currentLocale.localeIdentifier;

                var logs: any = [{
                    'type': 'managedError',
                    'processId': processId,
                    'id': errorId,
                    'fatal': false,
                    'processName': bundleIdentifier,
                    'appLaunchTimestamp': this.iso8601withFractionalSeconds(),
                    'device': {
                        'appVersion': appVersion,
                        'appBuild': appBuild,
                        'sdkName': sdkName,
                        'sdkVersion': device.sdkVersion,
                        'osName': osName,
                        'osVersion': osVersion,
                        'model': model,
                        'locale': locale
                    },
                    'exception': {
                        'message': exceptionMessage,
                        'type': 'Error',
                        'stackTrace': exceptionMessage
                    }
                }];

                if (attachments && attachments.length > 0) {
                    for (const attachment of attachments) {
                        let propertiesBase64 = attachment.data.base64Encoding();
                        logs.push({
                            'type': 'errorAttachment',
                            'contentType': 'text/plain',
                            'timestamp': this.iso8601withFractionalSeconds(),
                            'data': propertiesBase64,
                            'errorId': errorId,
                            'id': NSUUID.new().UUIDString,
                            'device': {
                                'appVersion': appVersion,
                                'appBuild': appBuild,
                                'sdkName': sdkName,
                                'sdkVersion': '1.0.0',
                                'osName': osName,
                                'osVersion': osVersion,
                                'model': model,
                                'locale': locale
                            }
                        })
                    }
                }

                if (properties && properties.length > 0) {
                    let _properties: any = NSMutableDictionary.alloc().init();

                    for (const property of properties) {
                        _properties.setValueForKey(property.value, property.key);
                    }

                    let propertiesJson = NSJSONSerialization.dataWithJSONObjectOptionsError(_properties, 1);
                    let propertiesBase64 = propertiesJson.base64Encoding()
                    logs.push({
                        'type': 'errorAttachment',
                        'contentType': 'text/plain',
                        'timestamp': this.iso8601withFractionalSeconds(),
                        'data': propertiesBase64,
                        'errorId': errorId,
                        'id': attachmentId,
                        'device': {
                            'appVersion': appVersion,
                            'appBuild': appBuild,
                            'sdkName': sdkName,
                            'sdkVersion': '1.0.0',
                            'osName': osName,
                            'osVersion': osVersion,
                            'model': model,
                            'locale': locale
                        }
                    })
                }

                let jsonMap = logs;

                let jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(jsonMap, 1);
                NSURLSession.sharedSession.uploadTaskWithRequestFromDataCompletionHandler(request, jsonData, (data, response: NSHTTPURLResponse, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                    } else {
                        resolve({
                            content: {
                                raw: data,
                                toString: (encoding?: any) => {
                                    const str = NSDataToString(data, encoding);
                                    if (typeof str === 'string') {
                                        return str;
                                    } else {
                                        throw new Error('Response content may not be converted to string');
                                    }
                                },
                                toJSON: (encoding?: any) => parseJSON(NSDataToString(data, encoding)),
                            },
                            statusCode: response.statusCode
                        });
                    }
                }).resume();

            } catch (error) {
                reject(error);
            }
        });
    }

    private iso8601withFractionalSeconds(): string {
        let iso8601DateFormatter = NSISO8601DateFormatter.new();
        iso8601DateFormatter.formatOptions = NSISO8601DateFormatOptions.WithInternetDateTime;
        return iso8601DateFormatter.stringFromDate(new Date());
    }
}
class AppCenterDelegate extends UIResponder implements UIApplicationDelegate, CLLocationManagerDelegate {
    private static option: InitOption;
    public static ObjCProtocols = [UIApplicationDelegate];

    static new(): AppCenterDelegate {
        return <AppCenterDelegate>super.new(); // calls new() on the NSObject
    }

    public static setup(option: InitOption): void {
        this.option = option;
    }

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        const classes: any = NSMutableArray.alloc().init();
        if (AppCenterDelegate.option.analytics) {
            classes.addObject(MSACAnalytics);
        }

        if (AppCenterDelegate.option.crashes) {
            classes.addObject(MSACCrashes);
        }

        application.applicationState
        UIApplicationState.Active

        MSACAppCenter.startWithServices(AppCenterDelegate.option.appSecret, classes);
        return true;
    }
}

class MSACCrashesDelegateImplementation extends NSObject implements MSACCrashesDelegate {
    private static callbacks: CrashesListener;
    public static ObjCProtocols = [MSACCrashesDelegate];

    public static setCallbacks(callbacks: CrashesListener): MSACCrashesDelegateImplementation {
        this.callbacks = callbacks;
        return <MSACCrashesDelegateImplementation>super.new();
    }

    public attachmentsWithCrashesForErrorReport(crashes: MSACCrashes, errorReport: MSACErrorReport): any {
        if (MSACCrashesDelegateImplementation.callbacks.getErrorAttachments) {
            return MSACCrashesDelegateImplementation.callbacks.getErrorAttachments(convertNativeReportModel(errorReport));
        }
        return toAttachmentList([]);
    }

    public crashesDidFailSendingErrorReportWithError?(crashes: MSACCrashes, errorReport: MSACErrorReport, error: NSError): void {
        if (MSACCrashesDelegateImplementation.callbacks.onSendingFailed) {
            return MSACCrashesDelegateImplementation.callbacks.onSendingFailed(convertNativeReportModel(errorReport), error);
        }
    }

    public crashesDidSucceedSendingErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): void {
        if (MSACCrashesDelegateImplementation.callbacks.onSendingSucceeded) {
            return MSACCrashesDelegateImplementation.callbacks.onSendingSucceeded(convertNativeReportModel(errorReport));
        }
    }

    public crashesShouldProcessErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): boolean {
        if (MSACCrashesDelegateImplementation.callbacks.shouldProcess) {
            return MSACCrashesDelegateImplementation.callbacks.shouldProcess(convertNativeReportModel(errorReport));
        }
        return true;
    }

    public crashesWillSendErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): void {
        if (MSACCrashesDelegateImplementation.callbacks.onBeforeSending) {
            return MSACCrashesDelegateImplementation.callbacks.onBeforeSending(convertNativeReportModel(errorReport));
        }

    }
}
class LocationDelegateManagerImplementation extends NSObject implements CLLocationManagerDelegate {
    private static callbacks: CrashesListener;
    public static ObjCProtocols = [MSACCrashesDelegate];

    public locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void {
        if (status === CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse) {
            manager.requestLocation();
        }
    }

    public locationManagerDidUpdateLocations(manager: CLLocationManager, locations: [CLLocation]): void {
        let userLocation: CLLocation = locations[0] as CLLocation;

        CLGeocoder.new().reverseGeocodeLocationCompletionHandler(userLocation,
            (placemarks, error) => {
                if (error === null) {
                    if (placemarks[0]) {
                        MSACAppCenter.countryCode = placemarks[0].ISOcountryCode;
                    }
                }
            });
    }

    public locationManagerDidFailWithError(manager: CLLocationManager, error: any): void {

    }
}

function NSDataToString(data: any, encoding?: HttpResponseEncoding): string {
    let code = NSUTF8StringEncoding; // long:4

    if (encoding === HttpResponseEncoding.GBK) {
        code = CFStringEncodings.kCFStringEncodingGB_18030_2000; // long:1586
    }

    let encodedString = NSString.alloc().initWithDataEncoding(data, code);

    // If UTF8 string encoding fails try with ISO-8859-1
    if (!encodedString) {
        code = NSISOLatin1StringEncoding; // long:5
        encodedString = NSString.alloc().initWithDataEncoding(data, code);
    }

    return encodedString.toString();
}

export const ACErrorAttachmentLog = {
    attachmentWithText(text: string, filename: string) {
        return MSACErrorAttachmentLog.attachmentWithTextFilename(text, filename);
    }
}

export const toAttachmentList = (attachments: any[]) => {
    return attachments;
}

export enum USER_CONFIRMATION {
    DONT_SEND = 0,
    SEND = 1,
    ALWAYS_SEND = 2
}
