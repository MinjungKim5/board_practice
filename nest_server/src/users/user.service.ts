import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository (User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(user_id: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: {user_id: user_id}});
    if (user && user.password == password) {
      return user.user_id;
    }
    return null;
  }

  async createUser(body: Partial<User>): Promise<string> {
    const user = await this.usersRepository.findOne({ where: {user_id: body.user_id}})
    if (user) return "same id exists"
    const newUser = await this.usersRepository.create(body);
    await this.usersRepository.save(newUser);
    return "register success"
  }
}
