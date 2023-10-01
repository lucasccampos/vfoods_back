/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';
import { Assign } from './entities/assign.entity';
import { Repository } from 'typeorm';
import { WhereAssignDto } from './dto/where-assign.dto';

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

  findAllByColaborator(colaboratorId: number) {
    return this.assignRepository.find({
      where: {
        colaboratorId: colaboratorId,
      },
    });
  }

  findAllByIndicator(indicatorId: number) {
    return this.assignRepository.find({
      where: {
        indicatorId: indicatorId,
      },
    });
  }

  findAllByManager(managerId: number) {
    return this.assignRepository.find({
      where: {
        colaborator: {
          managerId: managerId,
        },
      },
    });
  }

  findAllBySearch(search: any) {
    return this.assignRepository.find({
      where: search
    })
  }

  async findOne(
    whereDto: WhereAssignDto
  ) {
    return await this.assignRepository.findOne({
      where: whereDto,
    });
  }

  async update(
    updateAssignDto: UpdateAssignDto,
  ) {
    const assign = await this.findOne(
      updateAssignDto.where
    );

    Object.assign(assign, updateAssignDto.changes);

    return await this.assignRepository.save(assign);
  }

  async remove(
    whereDto: WhereAssignDto,
  ) {
    const assign = await this.findOne(whereDto);

    if (!assign) {
      return `Assign with ID ${whereDto.indicatorId} ${whereDto.colaboratorId} ${whereDto.month} ${whereDto.year} not found`;
    }

    return await this.assignRepository.remove(assign);
  }
}
