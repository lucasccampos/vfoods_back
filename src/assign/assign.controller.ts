/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignService } from './assign.service';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('assign')
export class AssignController {
  constructor(private readonly assignService: AssignService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateAssignDto,
  })
  create(@Body() createAssignDto: CreateAssignDto) {
    return this.assignService.create(createAssignDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAll() {
    return this.assignService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully obtained.',
    type: CreateAssignDto,
  })
  findOne(@Param('id') id: string) {
    return this.assignService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateAssignDto,
  })
  update(@Param('id') id: string, @Body() updateAssignDto: UpdateAssignDto) {
    return this.assignService.update(+id, updateAssignDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateAssignDto,
  })
  remove(@Param('id') id: string) {
    return this.assignService.remove(+id);
  }
}
