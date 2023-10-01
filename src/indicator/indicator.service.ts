/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { Indicator } from './entities/indicator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IndicatorService {
  constructor(
    @Inject('INDICATOR_REPOSITORY')
    private indicatorRepository: Repository<Indicator>,
  ) { }

  create(managerId: number, createIndicatorDto: CreateIndicatorDto) {
    const indicator = new Indicator();
    Object.assign(indicator, createIndicatorDto);
    indicator.managerId = managerId;

    return this.indicatorRepository.save(indicator);
  }

  findAll() {
    return this.indicatorRepository.find();
  }

  findAllForManager(managerId: number) {
    return this.indicatorRepository.find({
      where: {
        "managerId": managerId,
      },
    });
  }

  findOne(id: number) {
    return this.indicatorRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    const indicador = await this.findOne(id);
    Object.assign(indicador, updateIndicatorDto);

    return await this.indicatorRepository.save(indicador);
  }

  async remove(id: number) {
    const indicador = await this.findOne(id);
    return await this.indicatorRepository.remove(indicador);
  }
}
