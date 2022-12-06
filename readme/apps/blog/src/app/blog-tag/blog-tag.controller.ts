import { Body, Post, Controller, Delete, Param, HttpCode, HttpStatus, Get, Patch } from '@nestjs/common';
import { BlogTagService } from './blog-tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { fillObject } from '@readme/core';
import { TagRdo } from './rdo/tag.rdo';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('categories')
export class BlogTagController {
  constructor(
    private readonly blogTagService: BlogTagService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    const existTag = await this.blogTagService.getTag(tagId);
    return fillObject(TagRdo, existTag);
  }

  @Get('/')
  async index() {
    const categories = await this.blogTagService.getTags();
    return fillObject(TagRdo, categories);
  }

  @Post('/')
  async create(@Body() dto: CreateTagDto) {
    const newTag = await this.blogTagService.createTag(dto);
    return fillObject(TagRdo, newTag);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    this.blogTagService.deleteTag(tagId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTagDto) {
    const tagId = parseInt(id, 10);
    const updatedTag = await this.blogTagService.updateTag(tagId, dto)
    return fillObject(TagRdo, updatedTag);
  }
}
