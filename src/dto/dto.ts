import { IsNumber, IsString } from 'class-validator'

export class UserDto {

  @IsString()
  name!: string
  @IsString()
  email!: string
  @IsString()
  company!: string
  @IsString()
  blog!: string
  @IsString()
  location!: string
  @IsNumber()
  followers!: number
  @IsNumber()
  following!: number
  @IsNumber()
  public_repos_No!: number
  analized_repos!: number
  repositories!: RepoInfo[]

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial)
  }
}

export class RepoInfo {

  @IsString()
  name!: string
  @IsString()
  language!: string
  @IsNumber()
  star_count!: number

  score!: number

  constructor(partial: Partial<RepoInfo>) {
    Object.assign(this, partial);
  }

}
