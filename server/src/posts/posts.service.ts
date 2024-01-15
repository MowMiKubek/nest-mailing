import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { IPost } from './entities/post.interface';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<IPost>) {}

  async create(createPostDto: CreatePostDto) {
    // const post = await this.postModel.create(createPostDto);
    // return post.save();
    console.log(createPostDto);
    const post = new this.postModel(createPostDto);
    console.log(post);
    return post;
  }

  findAll() {
    return this.postModel.find({}).exec();
  }

  async findOne(id: ObjectId) {
    const IPost = await this.postModel.findById(id).exec();
    console.log(IPost);
    return IPost;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
