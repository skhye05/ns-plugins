export type IAppDynamicsCrashCallback = (summaries: IAppDynamicsCrashReportSummary[]) => void;
export interface IAppDynamicsConfig {
  appKey: string;
  applicationName?: string;
  collectorURL?: string;
  screenshotURL?: string;
  loggingLevel?: AppDynamicsLoggingLevel;
  enableLogging?: boolean;
  interactionCaptureMode?: number;
  enableAutoInstrument?: boolean;
  // collectorChannelFactory?: any;
  crashCallback?: IAppDynamicsCrashCallback;
  networkRequestCallback?: (...args: any) => void;
  screenshotsEnabled?: boolean;
  jsAgentAjaxEnabled?: boolean;
  crashReportingEnabled?: boolean;

  /**
   * Android ONLY
   */
  jsAgentInjectionEnabled?: boolean;

  /**
   * Android ONLY
   */
  compileTimeInstrumentationCheck?: boolean;

  /**
   * iOS ONLY
   */
  jsAgentEnabled?: boolean;

  /**
   * iOS ONLY
   */
  jsAgentFetchEnabled?: boolean;

  /**
   * iOS ONLY
   */
  jsAgentZonePromiseEnabled?: boolean;

  /**
   * iOS ONLY
   */
  reachabilityHostName?: string;

  /**
   * iOS ONLY
   */
  anrDetectionEnabled?: boolean;

  /**
   * iOS ONLY
   */
  anrStackTraceEnabled?: boolean;
  // excludedUrlPatterns?: any;

  /**
   * iOS ONLY
   */
  flushInterval?: number;
}

export enum AppDynamicsLoggingLevel {
  LOGGING_LEVEL_VERBOSE = 1,
  LOGGING_LEVEL_INFO = 2,
  LOGGING_LEVEL_NONE = 4,
}

export interface IAppDynamicsCrashReportSummary {
  readonly crashId: string;
  readonly exceptionClass?: string;
  readonly exceptionMessage?: string;
  readonly exceptionName?: string;
  readonly exceptionReason?: string;
  readonly signalCode?: string;
  readonly signalName?: string;
}

export enum AppDynamicsBreadcrumbVisibility {
  CRASHES_ONLY,
  CRASHES_AND_SESSIONS,
}

export enum AppDynamicsErrorSeverityLevel {
  INFO,
  WARNING,
  CRITICAL,
}
