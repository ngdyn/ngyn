import { NgynLogLevel } from './log-levels.types';

export interface NgynLog<T = unknown> {
  /**
   * Indent level
   */
  readonly deep?: number;
  /**
   * Level of severity
   */
  readonly level: NgynLogLevel;
  /**
   * Log message describing an event
   */
  readonly message: string;
  /**
   * Optional payload related to the event
   */
  readonly payload?: T;
}

export type NgynLoggerFn = (event: NgynLog) => unknown;