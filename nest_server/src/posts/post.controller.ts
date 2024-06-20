import { Controller, Get, Post as HttpPost, Body, Param, Delete, Put} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    const res = this.postService.findAll();
    // console.log(typeof(res));
    // console.log(res);
    return res;
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @HttpPost()
  create(@Body() post: Partial<PostEntity>): Promise<PostEntity> {
    return this.postService.create(post);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.postService.delete(id);
  }
  
  @Put()
  update(@Body() post: Partial<PostEntity>): Promise<void> {
    return this.postService.update(post);
  }

}
