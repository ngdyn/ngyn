import { Inject, Injectable, isDevMode } from '@angular/core';
import { NGYN_LOG_LEVEL } from '../tokens/log-level.token';
import { NgynLogLevel, ngynLogLevels } from '../types/log-levels.types';
import { NgynLog, NgynLoggerFn } from '../types/log.types';

/**
 * Service to be overriden, defaults to console driver.
 */
@Injectable()
export class NgynLogDriver {
  startedAt = Date.now();

  // loggers

  logFatal: NgynLoggerFn = (event: NgynLog) => {
    return new Error(event.message);
  }

  logError: NgynLoggerFn = (event: NgynLog) => {
    console.error(...this.format(event));
  }

  logWarning: NgynLoggerFn = (event: NgynLog) => {
    console.warn(...this.format(event));
  }

  logInfo: NgynLoggerFn = (event: NgynLog) => {
    console.log(...this.format(event));
  }

  constructor(
    @Inject(NGYN_LOG_LEVEL) private level: NgynLogLevel,
  ) {}

  setLevel(level: number): void {
    this.level = level;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(event: NgynLog, force = false): any {
    // do not log anything on production
    // or below the configured limit
    if (!isDevMode() || (!force && !(event.level & this.level))) {
      return;
    }

    return this.getLogger(event.level)(event);
  }

  private getLogger(level: NgynLogLevel): NgynLoggerFn {
    switch (level) {
      case NgynLogLevel.Fatal:
        return this.logFatal;
      case NgynLogLevel.Error:
        return this.logError;
      case NgynLogLevel.Warning:
        return this.logWarning;
      default:
        return this.logInfo;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private format(event: NgynLog): any[] {
    const result = [
      ...this.colorify(event.deep || 0, event.level),
      event.message,
    ];
    return event.payload ? [...result, event.payload] : result;
  }

  private colorify(
    indent: number,
    level: NgynLogLevel,
  ): string[] {
    const result = [''];
    if (this.level & NgynLogLevel.Testing) {
      result[0] += `%c${(Date.now() - this.startedAt).toString().padStart(5, '0')} `;
      result.push('color: #adb5bd');
    }
    result[0] += `${''.padStart(2 * (indent || 0), ' ')}%c[${ngynLogLevels.get(level)}]`;

    switch (level) {
      case NgynLogLevel.Fatal:
        result.push('color: #dc3545');
        break;
      case NgynLogLevel.Error:
        result.push('color: #dc3545');
        break;
      case NgynLogLevel.Warning:
        result.push('color: #fd7e14');
        break;
      case NgynLogLevel.Hierarchy:
        result.push('color: #0d6efd');
        break;
      case NgynLogLevel.Lifecycle:
        result.push('color: #6f42c1');
        break;
      case NgynLogLevel.Load:
        result.push('color: #9f72f1');
        break;
      case NgynLogLevel.Ready:
        result.push('color: #20c997');
        break;
      case NgynLogLevel.Runtime:
        result.push('color: #adb5bd');
        break;
      default: // info
        result.push('color: #0d6efd');
    }

    return result;
  }
}
