/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { IndicatorService } from './indicator.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { UserId } from 'src/auth/userId.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('indicator')
@UseGuards(JwtAuthGuard)
export class IndicatorController {
  constructor(private readonly indicatorService: IndicatorService) { }

  @Post('/create')
  create(
    @UserId() managerId: number,
    @Body() createIndicatorDto: CreateIndicatorDto,
  ) {
    return this.indicatorService.create(managerId, createIndicatorDto);
  }

  @Get('/all')
  findAll() {
    return this.indicatorService.findAll();
  }

  @Get('/all/:managerId')
  findAllForGestor(@Param('managerId') managerId: number) {
    return this.indicatorService.findAllForManager(managerId);
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.indicatorService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: number,
    @Body() updateIndicatorDto: UpdateIndicatorDto,
  ) {
    return this.indicatorService.update(id, updateIndicatorDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.indicatorService.remove(id);
  }
}
