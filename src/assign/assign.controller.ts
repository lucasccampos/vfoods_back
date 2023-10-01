/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AssignService } from './assign.service';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WhereAssignDto } from './dto/where-assign.dto';

@Controller('assign')
@UseGuards(JwtAuthGuard)
export class AssignController {
  constructor(private readonly assignService: AssignService) { }

  @Post('/create')
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

  @Get('/all/colaborator/:colaboratorId')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAllByColaborator(@Param('colaboratorId') colaboratorId: number) {
    return this.assignService.findAllByColaborator(colaboratorId);
  }

  @Get('/all/indicator/:indicatorId')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAllByIndicator(@Param('indicatorId') indicatorId: number) {
    return this.assignService.findAllByIndicator(indicatorId);
  }

  @Get('/all/manager/:managerId')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAllByManager(@Param('managerId') managerId: number) {
    return this.assignService.findAllByManager(managerId);
  }

  @Post('/all/search')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateAssignDto],
  })
  findAllBySearch(@Body() search: any) {
    return this.assignService.findAllBySearch(search);
  }

  @Post('/find')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully obtained.',
    type: CreateAssignDto,
  })
  findOne(@Body() whereDto: WhereAssignDto) {
    return this.assignService.findOne(whereDto);
  }

  @Patch('/update')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateAssignDto,
  })
  update(@Body() updateAssignDto: UpdateAssignDto) {
    return this.assignService.update(updateAssignDto);
  }

  @Post('/delete')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateAssignDto,
  })
  remove(@Body() whereDto: WhereAssignDto) {
    return this.assignService.remove(whereDto);
  }
}
