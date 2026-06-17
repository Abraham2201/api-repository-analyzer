import { Controller, Get, Logger, Param } from '@nestjs/common';
import { GitDataService } from '../service/git-data.service';
import { UserDto } from '../dto/dto';

@Controller()
export class ApiController {

  private readonly logger = new Logger(ApiController.name);
  constructor(
    private readonly gitService: GitDataService
  ) { }

  @Get(':userName/analysis')
  findUser(@Param('userName') userName: string): Promise<UserDto> {
    this.logger.log(`This action returns the user data from: ${userName}`);
    return this.gitService.getUserData(userName);
  }
}
