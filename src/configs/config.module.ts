import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {
  static forRoot() {
    return {
      module: ConfigModule,
      global: true,
    };
  }
}
