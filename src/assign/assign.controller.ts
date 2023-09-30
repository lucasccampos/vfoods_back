/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get('/all')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAll() {
    return this.assignService.findAll();
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully obtained.',
    type: CreateAssignDto,
  })
  findOne(@Query('id_indicator') id_indicator: number, @Query('id_colaborator') id_colaborator: number, @Query('month') month: number, @Query('year') year: number) {
    return this.assignService.findOne(id_indicator, id_colaborator, month, year);
  }

  @Patch()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateAssignDto,
  })
  update(@Query('id_indicator') id_indicator: number, @Query('id_colaborator') id_colaborator: number, @Query('month') month: number, @Query('year') year: number, @Body() updateAssignDto: UpdateAssignDto) {
    return this.assignService.update(id_indicator, id_colaborator, month, year, updateAssignDto);
  }

  @Delete()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateAssignDto,
  })
  remove(@Query('id_indicator') id_indicator: number, @Query('id_colaborator') id_colaborator: number, @Query('month') month: number, @Query('year') year: number) {
    return this.assignService.remove(id_indicator, id_colaborator, month, year);
  }
}
