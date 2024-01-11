import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model, ObjectId } from 'mongoose';
import { IUser } from './entities/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const user = await this.userModel.create(createUserDto);
    return user.save();
  }

  findAll(): Promise<IUser[]> {
    return this.userModel.find({}).exec();
  }

  findOneById(id: ObjectId): Promise<IUser> {
    return this.userModel.findById(id).exec();
  }

  findOneByLogin(login: string): Promise<IUser> {
    return this.userModel.findOne({login}).exec();
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: false }).exec();
  }

  async remove(id: ObjectId): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.userModel.findByIdAndDelete(id).exec();
      return { deleted: true };
    } catch (error) {
      return { deleted: false, message: error.message };
    }
  }
}
