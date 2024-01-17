import { Injectable } from '@angular/core';
import { NgynLogLevel } from '../types/log-levels.types';
import { NgynLogDriver } from './log-driver.service';
import { NgynNode } from '@ngyn/types';

@Injectable()
export class NgynLogger {
  constructor(
    private readonly driver: NgynLogDriver,
  ) {}

  setLevel(level: number): void {
    this.driver.setLevel(level);
  }

  log({ deep }: NgynNode, message: string, payload?: unknown): void {
    this.driver.log({
      deep,
      message,
      level: NgynLogLevel.Runtime,
      payload: payload && typeof payload === 'object' ? payload : JSON.stringify(payload),
    }, true);
  }
}
