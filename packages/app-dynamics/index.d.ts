import { AppDynamicsBreadcrumbVisibility, AppDynamicsErrorSeverityLevel, IAppDynamicsConfig } from './common';
export declare class AppDynamics {
  static start(config: IAppDynamicsConfig): void;
  static shutdownAgent(): void;
  static restartAgent(): void;
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
  static blockScreenshots(): void;
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
  static unblockScreenshots(): void;
  /**
   * Check if the ability to take screenshots is blocked.
   *
   * @returns `boolean` - boolean whether screenshot capture is blocked
   */
  static screenshotsBlocked(): boolean;
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
  static takeScreenshot(): void;
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
  static startTimer(name: string): void;
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
  static stopTimer(name: string): void;
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
  static reportMetric(option: { name: string; value: number }): void;
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
  static setUserData(option: { key: string; value: string }): void;
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
  static setUserDataLong(option: { key: string; value: number }): void;
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
  static setUserDataBoolean(option: { key: string; value: boolean }): void;
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
  static setUserDataDouble(option: { key: string; value: number }): void;
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
  static setUserDataDate(option: { key: string; value: Date }): void;
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
  static leaveBreadcrumb(option: { description: string; mode?: AppDynamicsBreadcrumbVisibility }): void;
  /**
   * Creates a crash report of the given crash dump. This crash report will be reported to collector when application restarts.
   *
   * @param option
   * * `crashDump`: `string` - Json string of the crash dump.
   * * `type`: `string` - crash report type.
   */
  static createCrashReport(option: { crashDump: string; type: string }): void;
  /**
   * Reports an error that was caught.
   * This can be called in catch blocks to report interesting errors that you want to track.
   * @param option
   * * `message`: `string` - error message or description.
   * * `severity`: `AppDynamicsErrorSeverityLevel` - Valid severity levels
   * `AppDynamicsErrorSeverityLevel.INFO`,
   * `AppDynamicsErrorSeverityLevel.WARNING`,
   * `AppDynamicsErrorSeverityLevel.CRITICAL`
   */
  static reportError(option: { message: string; severity: AppDynamicsErrorSeverityLevel }): void;
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
  static trackUIEvent(option: { activity: string; eventName: string; uiClass: string; startTimeEpochMills: number; label?: string; accessibilityLabel?: string; uiTag?: number; index?: string; uiResponder?: string }): void;
}
