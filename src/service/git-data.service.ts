import { HttpService } from '@nestjs/axios';
import { Logger, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/dto';
import { ConfigService } from '../configs/config.service';


@Injectable()
export class GitDataService {
  private readonly logger = new Logger(GitDataService.name);
  constructor(private readonly httpService: HttpService,
    private readonly config: ConfigService
  ) { }

  async getUserData(userName: string): Promise<UserDto> {
    try {
      const response = await this.httpService.axiosRef.get(this.config.get('gitApiUrl') + userName);

      const userData = new UserDto({
        name: response.data.name,
        email: response.data.email,
        company: response.data.company,
        blog: response.data.blog,
        location: response.data.location,
        followers: response.data.followers,
        following: response.data.following,
        public_repos: response.data.public_repos,
      })

      return userData;

    } catch (error) {
      this.logger.error(`Error, couldn't find user: ${userName}`, (error as Error).message);
      return new UserDto({});
    }

  }

}
