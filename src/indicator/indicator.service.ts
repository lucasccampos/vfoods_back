import { Inject, Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { Indicator } from './entities/indicator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IndicatorService {
  constructor(
    @Inject('INDICATOR_REPOSITORY')
    private colaboratorRepository: Repository<Indicator>,
  ) {}

  create(createIndicatorDto: CreateIndicatorDto) {
    return 'This action adds a new indicator';
  }

  findAll() {
    return `This action returns all indicator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} indicator`;
  }

  update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    return `This action updates a #${id} indicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} indicator`;
  }
}
