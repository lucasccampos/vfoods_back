/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColaboratorService } from './colaborator.service';
import { CreateColaboratorDto } from './dto/create-colaborator.dto';
import { UpdateColaboratorDto } from './dto/update-colaborator.dto';

@Controller('colaborator')
export class ColaboratorController {
  constructor(private readonly colaboratorService: ColaboratorService) {}

  @Post('/create')
  create(@Body() createColaboratorDto: CreateColaboratorDto) {
    return this.colaboratorService.create(createColaboratorDto);
  }

  @Get()
  findAll() {
    return this.colaboratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboratorService.findOne(+id);
  }

  @Patch('/update')
  async update(@Param('id') id: string, @Body() updateColaboratorDto: UpdateColaboratorDto) {
    return await  this.colaboratorService.update(+id, updateColaboratorDto);
  }

  @Delete('/delete')
  async remove(@Param('id') id: string) {
    return await this.colaboratorService.remove(+id);
  }
}
