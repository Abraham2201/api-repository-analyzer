import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [ApiController],
  providers: [ServiceModule],
})
export class ControllerModule { }
