import { DataSource } from 'typeorm';
import { Colaborator } from './entities/colaborator.entity';

export const colaboratorProviders = [
  {
    provide: 'COLABORATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Colaborator),
    inject: ['DATA_SOURCE'],
  },
];
