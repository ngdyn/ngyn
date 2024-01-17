import { InjectionToken } from '@angular/core';
import { NgynLogLevel } from '../types/log-levels.types';

export const NGYN_LOG_LEVEL = new InjectionToken<NgynLogLevel>(
  '@ngyn/logger:level'
);
