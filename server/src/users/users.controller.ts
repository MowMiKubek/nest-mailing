import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto)
      return await this.usersService.create(createUserDto);
    }
    catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.usersService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.usersService.remove(id);
  }
}
