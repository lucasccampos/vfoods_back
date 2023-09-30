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

  async create(createColaboratorDto: CreateColaboratorDto) {
    const colaborator = new Colaborator();
    Object.assign(colaborator, createColaboratorDto);
    return this.colaboratorRepository.save(colaborator);
  }

  findAll() {
    return this.colaboratorRepository.find();
  }

  findOne(id: number) {
    return this.colaboratorRepository.findOne(
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
      throw (`Colaborador com ID ${id} não encontrado`);
    }

    Object.assign(colaborator, updateColaboratorDto);

    return await this.colaboratorRepository.save(colaborator);
  }

  async remove(id: number) {
    const colaborator = await this.findOne(id);
    if (!colaborator) {
      return `Colaborador com ID ${id} não encontrado`;
    }
    else {
      return this.colaboratorRepository.remove(colaborator)
    }
  }
}
