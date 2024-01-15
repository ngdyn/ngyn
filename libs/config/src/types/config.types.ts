import { NgynLoggerConfig } from './logger.types';

// single config
export interface NgynBaseConfig {
  // data hierarchy
  name?: string; // optional fieldName
  children?: NgynBaseConfig[];
  detached?: boolean; // detached from the hierarchy
  variants?: unknown;
}

export type NgynConfig = NgynBaseConfig & NgynLoggerConfig;
