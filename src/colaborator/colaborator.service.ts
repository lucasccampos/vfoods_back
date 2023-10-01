/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateColaboratorDto } from './dto/create-colaborator.dto';
import { UpdateColaboratorDto } from './dto/update-colaborator.dto';
import { Colaborator } from './entities/colaborator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColaboratorService {
  constructor(
    @Inject('COLABORATOR_REPOSITORY')
    private colaboratorRepository: Repository<Colaborator>,
  ) { }

  async create(managerId: number ,createColaboratorDto: CreateColaboratorDto) {
    const colaborator = new Colaborator();
    Object.assign(colaborator, createColaboratorDto);
    colaborator.managerId = managerId;
    return await this.colaboratorRepository.save(colaborator);
  }

  async findAll() {
    return await this.colaboratorRepository.find();
  }

  async findAllForManager(managerId) {
    return await this.colaboratorRepository.find({
      where: {
        managerId: managerId
      }
    })
  }

  async findOne(id: number) {
    return await this.colaboratorRepository.findOne(
      {
        where: {
          id: id
        }
      }
    );
  }

  async update(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    const colaborator = await this.findOne(id);
    if (!colaborator) {
      throw (`Colaborator with id ${id} not found`);
    }

    Object.assign(colaborator, updateColaboratorDto);

    return await this.colaboratorRepository.save(colaborator);
  }

  async remove(id: number) {
    const colaborator = await this.findOne(id);
    if (!colaborator) {
      return `Colaborator with id ${id} not found`;
    }
    else {
      return await this.colaboratorRepository.remove(colaborator)
    }
  }
}
