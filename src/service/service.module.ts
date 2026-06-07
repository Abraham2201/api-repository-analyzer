import { Module } from '@nestjs/common';
import { GitDataService } from './git-data.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,],
  providers: [GitDataService],
  exports: [GitDataService]
})
export class ServiceModule { }
