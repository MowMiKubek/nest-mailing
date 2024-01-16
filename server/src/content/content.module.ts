import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeContentSchema, Content, ContentSchema, ImageContentSchema, TextContentSchema } from './entities/content.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Content.name,
      schema: ContentSchema,
      discriminators: [
        { name: 'text', schema: TextContentSchema },
        { name: 'image', schema: ImageContentSchema },
        { name: 'code', schema: CodeContentSchema },
      ]
    }
  ])],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
