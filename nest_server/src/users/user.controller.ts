import { Controller, Body, Get, Post, Delete, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserInfo } from './user.entity';
import { throwError } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() body: any) {
    const { user_id, password } = body;
    const user = await this.userService.validateUser(user_id, password);

    if (!user) throw new UnauthorizedException('invalid user info');

    return { message: 'login success', user_id};
  }

  @Post('/register')
  async resgister(@Body() body: any) {
    const result = await this.userService.createUser(body);
    if (result != 'register success') throw new HttpException(result, HttpStatus.BAD_REQUEST);
    return {message: result};
  }  
}