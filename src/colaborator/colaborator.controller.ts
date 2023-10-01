/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColaboratorService } from './colaborator.service';
import { CreateColaboratorDto } from './dto/create-colaborator.dto';
import { UpdateColaboratorDto } from './dto/update-colaborator.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('colaborator')
export class ColaboratorController {
  constructor(private readonly colaboratorService: ColaboratorService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateColaboratorDto,
  })
  create(@Body() createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorService.create(createColaboratorDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateColaboratorDto],
  })
  findAll() {
    return this.colaboratorService.findAll();
  }

  @Get('/all')
  findAllForManager (@Param('managerId') managerId: string) {
    return this.colaboratorService.findAllForManager(managerId)
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully obtained.',
    type: CreateColaboratorDto,
  })
  findOne(@Param('id') id: string) {
    return this.colaboratorService.findOne(+id);
  }

  @Patch('/update')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateColaboratorDto,
  })
  async update(@Param('id') id: string, @Body() updateColaboratorDto: UpdateColaboratorDto) {
    return await  this.colaboratorService.update(+id, updateColaboratorDto);
  }

  @Delete('/delete')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateColaboratorDto,
  })
  async remove(@Param('id') id: string) {
    return await this.colaboratorService.remove(+id);
  }
}
