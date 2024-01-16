import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { ObjectId } from 'mongoose';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.contentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.contentService.remove(+id);
  }
}
