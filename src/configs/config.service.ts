// src/config/config.service.ts

import { Injectable } from '@nestjs/common';
import { AppConfig } from './app.config';

@Injectable()
export class ConfigService {
  private readonly config = AppConfig;

  get(key: keyof typeof AppConfig) {
    return this.config[key];
  }
}
