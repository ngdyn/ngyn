import { Tree } from '@ngyn/types';
import { NgynLoggerConfig } from './logger.types';

// single config
export type NgynBaseConfig = Tree<{
  variants?: unknown;
}>;

export type NgynConfig = NgynBaseConfig & NgynLoggerConfig;
