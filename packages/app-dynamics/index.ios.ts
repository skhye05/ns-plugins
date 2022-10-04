import { Utils } from '@nativescript/core';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
import { AppDynamicsBreadcrumbVisibility, AppDynamicsErrorSeverityLevel, IAppDynamicsConfig, IAppDynamicsCrashCallback, IAppDynamicsCrashReportSummary } from './common';

export class AppDynamics {
  private static init(config: IAppDynamicsConfig) {
    const agentConfiguration = ADEumAgentConfiguration.alloc().initWithAppKey(config.appKey);

    if (config.collectorURL) {
      agentConfiguration.collectorURL = config.collectorURL;
    }

    if (config.screenshotURL) {
      agentConfiguration.screenshotURL = config.screenshotURL;
    }

    if (config.loggingLevel) {
      agentConfiguration.loggingLevel = <any>config.loggingLevel;
    }

    if (!isNullOrUndefined(config.enableLogging)) {
      agentConfiguration.enableLogging = config.enableLogging;
    }

    if (config.applicationName) {
      agentConfiguration.applicationName = config.applicationName;
    }

    if (config.reachabilityHostName) {
      agentConfiguration.reachabilityHostName = config.reachabilityHostName;
    }

    if (config.flushInterval) {
      agentConfiguration.flushInterval = config.flushInterval;
    }

    if (!isNullOrUndefined(config.anrDetectionEnabled)) {
      agentConfiguration.anrDetectionEnabled = config.anrDetectionEnabled;
    }

    if (!isNullOrUndefined(config.anrStackTraceEnabled)) {
      agentConfiguration.anrStackTraceEnabled = config.anrStackTraceEnabled;
    }

    if (!isNullOrUndefined(config.enableAutoInstrument)) {
      agentConfiguration.enableAutoInstrument = config.enableAutoInstrument;
    }

    if (config.interactionCaptureMode) {
      // agentConfiguration.withInteractionCaptureMode(config.loggingLevel)
    }

    // if (config.collectorChannelFactory) {
    //   agentConfiguration.withCollectorChannelFactory(config.collectorChannelFactory)
    // }

    if (config.crashCallback) {
      ADEumCrashReportImpl.setCallback(config.crashCallback);
      agentConfiguration.crashReportCallback = <any>ADEumCrashReportImpl;
    }

    // if (config.networkRequestCallback) {
    //   agentConfiguration.withNetworkRequestCallback()
    // }

    if (!isNullOrUndefined(config.screenshotsEnabled)) {
      agentConfiguration.screenshotsEnabled = config.screenshotsEnabled;
    }

    if (!isNullOrUndefined(config.jsAgentFetchEnabled)) {
      agentConfiguration.jsAgentEnabled = config.jsAgentEnabled;
    }

    if (!isNullOrUndefined(config.jsAgentAjaxEnabled)) {
      agentConfiguration.jsAgentAjaxEnabled = config.jsAgentAjaxEnabled;
    }

    if (!isNullOrUndefined(config.jsAgentFetchEnabled)) {
      agentConfiguration.jsAgentFetchEnabled = config.jsAgentFetchEnabled;
    }

    if (!isNullOrUndefined(config.jsAgentZonePromiseEnabled)) {
      agentConfiguration.jsAgentZonePromiseEnabled = config.jsAgentZonePromiseEnabled;
    }

    if (!isNullOrUndefined(config.crashReportingEnabled)) {
      agentConfiguration.crashReportingEnabled = config.crashReportingEnabled;
    }

    ADEumInstrumentation.initWithConfiguration(agentConfiguration);
  }

  public static start(config: IAppDynamicsConfig) {
    NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(UIApplicationDidFinishLaunchingNotification, null, NSOperationQueue.mainQueue, (appNotification) => {
      this.init(config);
    });
  }

  public static shutdownAgent(): void {
    ADEumInstrumentation.shutdownAgent();
  }

  public static restartAgent() {
    ADEumInstrumentation.restartAgent();
  }

  /**
   * Blocks screenshot capture if it is currently unblocked. Otherwise, this has no effect..
   *
   * If screenshots are disabled through `IAppDynamicsConfig` or through the controller UI, this method has no effect.
   *
   * If screenshots are set to manual mode in the controller UI, this method unblocks for manual mode only.
   *
   * WARNING: This will unblock capture for the entire app.
   *
   * The user is expected to manage any possible nesting issues that may occur if blocking and unblocking occur in different code paths.
   */
  public static blockScreenshots() {
    ADEumInstrumentation.blockScreenshots();
  }

  /**
   * Unblocks screenshot capture if it is currently blocked. Otherwise, this has no effect.
   *
   * If screenshots are disabled through `IAppDynamicsConfig` or through the controller UI, this method has no effect.
   *
   * If screenshots are set to manual mode in the controller UI, this method unblocks for manual mode only.
   *
   * WARNING: This will unblock capture for the entire app.
   *
   * The user is expected to manage any possible nesting issues that may occur if blocking and unblocking occur in different code paths.
   */
  public static unblockScreenshots() {
    ADEumInstrumentation.unblockScreenshots();
  }

  /**
   * Check if the ability to take screenshots is blocked.
   *
   * @returns `boolean` - boolean whether screenshot capture is blocked
   */
  public static screenshotsBlocked(): boolean {
    return ADEumInstrumentation.screenshotsBlocked();
  }

  /**
   * Asynchronously takes a screenshot of the current Activity’s window.
   *
   * If screenshots are disabled through `IAppDynamicsConfig` or through the controller UI, this method does nothing.
   *
   * This will capture everything, including personal information, so you must be cautious of when to take the screenshot.
   *
   * These screenshots will show up in the Sessions screen for this user.
   *
   * The screenshots are taken on a background thread, compressed, and only non-redundant parts are uploaded, so it is safe to take many of these without impacting performance of your application.
   */
  public static takeScreenshot() {
    ADEumInstrumentation.takeScreenshot();
  }

  /**
   * Starts a global timer with the given name.
   *
   * The name should contain only alphanumeric characters and spaces.
   *
   * Illegal characters shall be replaced by their ASCII hex value.
   *
   * WARNING: pre-4.3 agents threw an exception on illegal characters.
   *
   * @param name `string` The name of the timer.
   */
  public static startTimer(name: string) {
    ADEumInstrumentation.startTimerWithName(name);
  }

  /**
   * Stops a global timer with the given name and reports it to the cloud.
   *
   * The name should contain only alphanumeric characters and spaces.
   *
   * Illegal characters shall be replaced by their ASCII hex value.
   *
   * WARNING: pre-4.3 agents threw an exception on illegal characters.
   *
   * @param name `string` The name of the timer.
   */
  public static stopTimer(name: string) {
    ADEumInstrumentation.stopTimerWithName(name);
  }

  /**
   * Reports metric value for the given name.
   *
   * The name should contain only alphanumeric characters and spaces.
   *
   * Illegal characters shall be replaced by their ASCII hex value.
   *
   * WARNING: pre-4.3 agents threw an exception on illegal characters.
   *
   * @param option
   * * `name`: `string` - The name of the metric key.
   * * `value`: `number` - The value reported for the given key.
   */
  public static reportMetric(option: { name: string; value: number }) {
    ADEumInstrumentation.reportMetricWithNameValue(option.name, option.value);
  }

  /**
   * Sets a key-value pair identifier that will be included in all snapshots. The identifier can be used to add any data you wish.
   *
   * The key must be unique across your application. The key namespace is distinct for each user data type. Re-using the same key overwrites the previous value. The key is limited to MAX_USER_DATA_STRING_LENGTH characters.
   *
   * A value of null will clear the data.
   *
   * This information is not persisted across application runs. Once the application is destroyed, the user data is cleared.
   *
   * @param option
   * * `key`: `string` - Your unique key.
   * * `value`: `boolean` - Your value, or null to clear this data.
   */
  public static setUserData(option: { key: string; value: string }) {
    ADEumInstrumentation.setUserDataValue(option.key, option.value);
  }

  /**
   * Sets a key-value pair identifier that will be included in all snapshots. The identifier can be used to add any data you wish.
   *
   * The key must be unique across your application. The key namespace is distinct for each user data type. Re-using the same key overwrites the previous value. The key is limited to MAX_USER_DATA_STRING_LENGTH characters.
   *
   * A value of null will clear the data.
   *
   * This information is not persisted across application runs. Once the application is destroyed, the user data is cleared.
   *
   * @param option
   * * `key`: `string` - Your unique key.
   * * `value`: `boolean` - Your value, or null to clear this data.
   */
  public static setUserDataLong(option: { key: string; value: number }) {
    ADEumInstrumentation.setUserDataLongValue(option.key, option.value);
  }

  /**
   * Sets a key-value pair identifier that will be included in all snapshots. The identifier can be used to add any data you wish.
   *
   * The key must be unique across your application. The key namespace is distinct for each user data type. Re-using the same key overwrites the previous value. The key is limited to MAX_USER_DATA_STRING_LENGTH characters.
   *
   * A value of null will clear the data.
   *
   * This information is not persisted across application runs. Once the application is destroyed, the user data is cleared.
   *
   * @param option
   * * `key`: `string` - Your unique key.
   * * `value`: `boolean` - Your value, or null to clear this data.
   */
  public static setUserDataBoolean(option: { key: string; value: boolean }) {
    ADEumInstrumentation.setUserDataBooleanValue(option.key, option.value);
  }

  /**
   * Sets a key-value pair identifier that will be included in all snapshots. The identifier can be used to add any data you wish.
   *
   * The key must be unique across your application. The key namespace is distinct for each user data type. Re-using the same key overwrites the previous value. The key is limited to MAX_USER_DATA_STRING_LENGTH characters.
   *
   * A value of null will clear the data.
   *
   * The value has to be finite. Attempting to set infinite or NaN value, will clear the data.
   *
   * This information is not persisted across application runs. Once the application is destroyed, the user data is cleared.
   *
   * @param option
   * * `key`: `string` - Your unique key.
   * * `value`: `number` - Your value, or null to clear this data.
   */
  public static setUserDataDouble(option: { key: string; value: number }) {
    ADEumInstrumentation.setUserDataDoubleValue(option.key, option.value);
  }

  /**
   * Sets a key-value pair identifier that will be included in all snapshots. The identifier can be used to add any data you wish.
   *
   * The key must be unique across your application. The key namespace is distinct for each user data type. Re-using the same key overwrites the previous value. The key is limited to MAX_USER_DATA_STRING_LENGTH characters.
   *
   * A value of `null` will clear the data.
   *
   * This information is not persisted across application runs. Once the application is destroyed, the user data is cleared.
   *
   * @param option
   * * `key`: `string` - Your unique key.
   * * `value`: `Date` - Your value, or null to clear this data.
   */
  public static setUserDataDate(option: { key: string; value: Date }) {
    ADEumInstrumentation.setUserDataDateValue(option.key, option.value);
  }

  /**
   * Leaves a breadcrumb that will appear in a crash report and, optionally, session.
   *
   * Call this when something interesting happens in your application.
   * The breadcrumb will be included in different reports depending on the mode.
   * Each crash report displays the most recent 99 breadcrumbs.
   *
   * @param option
   * * `breadcrumb`: `string` - The string to include in the crash report and sessions. If it’s longer than 2048 characters, it will be truncated. If it’s empty, no breadcrumb will be recorded.
   * * `type?`: `string` `optional` -  A mode from `AppDynamicsBreadcrumbVisibility`. If invalid, defaults to `AppDynamicsBreadcrumbVisibility.CRASHES_ONLY`
   */
  public static leaveBreadcrumb(option: { description: string; mode?: AppDynamicsBreadcrumbVisibility }) {
    if (option.mode) {
      ADEumInstrumentation.leaveBreadcrumbMode(option.description, option.mode as number);
    } else {
      ADEumInstrumentation.leaveBreadcrumb(option.description);
    }
  }

  /**
   * Creates a crash report of the given crash dump. This crash report will be reported to collector when application restarts.
   *
   * @param option
   * * `crashDump`: `string` - Json string of the crash dump.
   * * `type`: `string` - crash report type.
   */
  public static createCrashReport(option: { crashDump: string; type: string }) {
    ADEumInstrumentation.createCrashReportType(option.crashDump, option.type);
  }

  public static crashReportingEnabled(enabled: boolean, appKey: string) {
    const agentConfiguration = ADEumAgentConfiguration.alloc().initWithAppKey(appKey);
    agentConfiguration.crashReportingEnabled = enabled;
    ADEumInstrumentation.initWithConfiguration(agentConfiguration);
  }

  /**
   * Reports an error that was caught.
   * This can be called in catch blocks to report interesting errors that you want to track.
   * @param option
   * * `message`: `string` - error message or description.
   * * `severity`: `AppDynamicsErrorSeverityLevel` - Valid severity levels
   * * `stacktrace?`: `AppDynamicsErrorSeverityLevel` `optional` - allow stacktrace
   * `AppDynamicsErrorSeverityLevel.INFO`,
   * `AppDynamicsErrorSeverityLevel.WARNING`,
   * `AppDynamicsErrorSeverityLevel.CRITICAL`
   */
  public static reportError(option: { message: string; severity: AppDynamicsErrorSeverityLevel; stacktrace?: boolean }) {
    const appID = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleIdentifier');
    const domain = appID + '.ReportCrash.ErrorDomain';
    const userInfo: NSDictionary<any, any> = NSMutableDictionary.alloc().init();
    userInfo.setValueForKey(option.message, 'NSLocalizedDescriptionKey');
    const error = NSError.errorWithDomainCodeUserInfo(domain, -101, userInfo);
    ADEumInstrumentation.reportErrorWithSeverityAndStackTrace(error, option.severity as number, option.stacktrace || false);
  }

  /**
   * Manually tracks a UI event.
   *
   *  @param option
   *
   * * `activity` - The name of the parent page / fragment / screen.
   *
   * * `eventName` - The name of the event, of the action(e.g. “Button Pressed”, “Text View Unfocused”, “Table Cell Selected”)
   *
   * * `uiClass` - Class name(e.g.Xamarin.Forms.Button, MyNamespace.MyButton)
   *
   * * `startTimeEpochMills` - The time of the vent as unix time(milliseconds)
   *
   * * `label` - `Optional` The label’s value.
   *
   * * `accessibilityLabel` - `Optional` The accessibility value(e.g.button.accessibility)
   *
   * * `uiTag` - `Optional` UI Element tag’s value. (e.g.button.tag)
   *
   * * `index` - `Optional` Comma separated list of table view item indexes.Used for Table View Selection.
   *
   * * `uiResponder` - `Optional` Method name for the handler.
   */
  public static trackUIEvent(option: { activity: string; eventName: string; uiClass: string; startTimeEpochMills: number | Date; label?: string; accessibilityLabel?: string; uiTag?: number; index?: string; uiResponder?: string }) {
    ADEumInstrumentation.TrackUIEventNameClassStartTimeLabelAccessibilityTagIndexUiResponder(option.activity, option.eventName, option.uiClass, option.startTimeEpochMills as Date, option.label, option.accessibilityLabel, option.uiTag, option.index, option.uiResponder);
  }
}

@NativeClass
class ADEumCrashReportImpl extends NSObject implements ADEumCrashReportCallback {
  private static callback: IAppDynamicsCrashCallback;
  public static ObjCProtocols = [ADEumCrashReportCallback];

  public static setCallback(callback: IAppDynamicsCrashCallback): ADEumCrashReportImpl {
    this.callback = callback;
    return <ADEumCrashReportImpl>super.new();
  }

  public onCrashesReported(summaries: NSArray<ADEumCrashReportSummary> | ADEumCrashReportSummary[]) {
    ADEumCrashReportImpl.callback(summaries as IAppDynamicsCrashReportSummary[]);
  }
}
