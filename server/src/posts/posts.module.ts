import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './entities/post.schema';
import { CodeContent, CodeContentSchema, ImageContent, ImageContentSchema, TextContent, TextContentSchema } from './entities/content.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Post',
      schema: PostSchema,
      discriminators: [
        { name: TextContent.name, schema: TextContentSchema },
        { name: ImageContent.name, schema: ImageContentSchema },
        { name: CodeContent.name, schema: CodeContentSchema },
      ],
    },
  ])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
