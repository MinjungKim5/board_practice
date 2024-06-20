import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor (
    @InjectRepository (Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    console.log("finding all posts");
    return this.postsRepository.find({
      select : {
        id: true,
        title: true
      }
    });
  }

  findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: {id}})
  }

  async create(post: Partial<Post>): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  async delete(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async update(post: Partial<Post>): Promise<void> {
    const res = this.postsRepository.update(post.id, post);
  }
}
