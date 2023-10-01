/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ColaboratorService } from './colaborator.service';
import { CreateColaboratorDto } from './dto/create-colaborator.dto';
import { UpdateColaboratorDto } from './dto/update-colaborator.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserId } from 'src/auth/userId.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('colaborator')
@UseGuards(JwtAuthGuard)
export class ColaboratorController {
  constructor(private readonly colaboratorService: ColaboratorService) { }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateColaboratorDto,
  })
  create(@UserId() managerId: number, @Body() createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorService.create(managerId, createColaboratorDto);
  }

  @Get('/all')
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully obtained.',
    type: [CreateColaboratorDto],
  })
  findAll() {
    return this.colaboratorService.findAll();
  }

  @Get('/all/:managerId')
  findAllForManager(@Param('managerId') managerId: string) {
    return this.colaboratorService.findAllForManager(managerId)
  }

  @Patch('/update/:id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateColaboratorDto,
  })
  async update(@Param('id') id: number, @Body() updateColaboratorDto: UpdateColaboratorDto) {
    return await this.colaboratorService.update(id, updateColaboratorDto);
  }

  @Delete('/delete/:id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateColaboratorDto,
  })
  async remove(@Param('id') id: number) {
    return await this.colaboratorService.remove(id);
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully obtained.',
    type: CreateColaboratorDto,
  })
  async findOne(@Param('id') id: number) {
    return await this.colaboratorService.findOne(id);
  }
}
