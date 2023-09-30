/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';
import { Assign } from './entities/assign.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignService {
  constructor(
    @Inject('ASSIGN_REPOSITORY')
    private assignRepository: Repository<Assign>,
  ) { }
  async create(createAssignDto: CreateAssignDto) {
    const assign = new Assign();

    Object.assign(assign, createAssignDto);

    return await this.assignRepository.save(assign);
  }

  async findAll() {
    return await this.assignRepository.find();
  }

  async findOne(
    id_indicator: number,
    id_colaborator: number,
    month: number,
    year: number,
  ) {
    return await this.assignRepository.findOne({
      where: {
        id_indicator: id_indicator,
        id_colaborator: id_colaborator,
        month: month,
        year: year,
      },
    });
  }

  async update(
    id_indicator: number,
    id_colaborator: number,
    month: number,
    year: number,
    updateAssignDto: UpdateAssignDto,
  ) {
    const assign = await this.findOne(
      id_indicator,
      id_colaborator,
      month,
      year,
    );

    Object.assign(assign, updateAssignDto);

    return await this.assignRepository.save(assign);
  }

  async remove(
    id_indicator: number,
    id_colaborator: number,
    month: number,
    year: number,
  ) {
    const assign = await this.findOne(id_indicator, id_colaborator, month, year);

    if (!assign) {
      return `Assign with ID ${id_indicator} ${id_colaborator} ${month} ${year} not found`;
    }

    return await this.assignRepository.remove(assign);
  }
}
