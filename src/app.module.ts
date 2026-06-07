import { Module } from '@nestjs/common';
import { ConfigModule } from './configs/config.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ConfigModule.forRoot(), ControllerModule, ServiceModule],
  controllers: [],
  providers: [ServiceModule],
})
export class AppModule { }
