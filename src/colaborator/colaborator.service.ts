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
  ) {}

  create(createColaboratorDto: CreateColaboratorDto) {
    const colaborator = new Colaborator();
    Object.assign(colaborator, CreateColaboratorDto);
    return this.colaboratorRepository.save(colaborator);
  }

  findAll() {
    return `This action returns all colaborator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaborator`;
  }

  update(id: number, updateColaboratorDto: UpdateColaboratorDto) {
    return `This action updates a #${id} colaborator`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaborator`;
  }
}
