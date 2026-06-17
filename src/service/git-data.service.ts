import { HttpService } from '@nestjs/axios';
import { Logger, Injectable } from '@nestjs/common';
import { RepoInfo, UserDto } from '../dto/dto';
import { ConfigService } from '../configs/config.service';


@Injectable()
export class GitDataService {
  private readonly logger = new Logger(GitDataService.name);
  private user!: string;
  constructor(private readonly httpService: HttpService,
    private readonly config: ConfigService
  ) { }

  async getUserData(userName: string): Promise<UserDto> {
    try {
      this.user = userName;
      const response = await this.httpService.axiosRef.get(this.config.get('gitApiUrl') + this.user);
      const reposInfo = await this.analyzeRepositories();
      const userData = new UserDto({
        name: response.data.name,
        email: response.data.email,
        company: response.data.company,
        blog: response.data.blog,
        location: response.data.location,
        followers: response.data.followers,
        following: response.data.following,
        public_repos_No: response.data.public_repos,
        repositories: reposInfo
      })

      return userData;

    } catch (error) {
      this.logger.error(`Error, couldn't find user: ${userName}`, (error as Error).message);
      return new UserDto({});
    }

  }

  async analyzeRepositories(): Promise<RepoInfo[]> {
    let repos: RepoInfo[] = [];
    try {
      const response = (await this.httpService.axiosRef.get(this.config.get('gitApiUrl') + this.user + "/repos"));
      repos = response.data.map(repo => {
        const r = new RepoInfo({
          name: repo.name,
          language: repo.language,
          star_count: repo.stargazers_count
        })
        return r;
      });


    } catch (error) {

    }

    return repos;
  }
}
