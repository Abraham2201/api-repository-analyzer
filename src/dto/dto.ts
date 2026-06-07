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
  public_repos!: number

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial)
  }
}

export class Repositories {

  @IsString()
  name!: string
  @IsString()
  language!: string
  @IsString()
  star_count!: string
  @IsString()
  score!: string

}
