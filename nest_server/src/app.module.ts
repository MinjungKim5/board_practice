import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './posts/post.service';
import { PostController } from './posts/post.controller';
import { Post } from './posts/post.entity';
import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';
import { User } from './users/user.entity';
import * as fs from 'fs';
import * as path from 'path';
const spath = path.join(__dirname,'../src/secrets.json')
const secrets = JSON.parse(fs.readFileSync(spath, 'utf-8'));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: secrets.dbUsername,
      password: secrets.dbPassword,
      database: 'board_practice',
      schema: 'board',
      entities: [Post, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Post, User]),
  ],
  controllers: [PostController, UserController],
  providers: [PostService, UserService],
})
export class AppModule {}
