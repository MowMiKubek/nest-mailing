import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Content } from './entities/content.schema';
import { ContentType } from './entities/content.interface';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class ContentService {
  constructor(@InjectModel(Content.name) private contentModel: Model<ContentType>) {}

  async create(createContentDto: CreateContentDto) {
    const content = await this.contentModel.create(createContentDto);
    return content.save();
  }

  findAll() {
    return this.contentModel.find().exec();
  }

  findOne(id: ObjectId) {
    return this.contentModel.findOne().exec();
  }

  remove(id: number) {
    return this.contentModel.findByIdAndDelete(id).exec();
  }
}
