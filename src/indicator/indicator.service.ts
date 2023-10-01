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
  ) {}

  create(createIndicatorDto: CreateIndicatorDto) {
    const indicator = new Indicator();
    Object.assign(indicator, createIndicatorDto);
    return this.indicatorRepository.save(indicator);
  }

  findAll() {
    return this.indicatorRepository.find();
  }

  findAllForGestor(id_gestor: string){
    return this.indicatorRepository.find({
      where: {
        id_gestor: id_gestor
      }
    })
  }

  findOne(id: number) {
    return this.indicatorRepository.findOne({
      where: {
       id_indicator:id 
      }
    });
  }

  async update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    const indicador = await this.findOne(id) 
    Object.assign(indicador, updateIndicatorDto)

    return this.indicatorRepository.save(indicador)
  }

  async remove(id: number) {
    const indicador = await this.findOne(id)
    return this.indicatorRepository.delete(indicador);
  }
}
