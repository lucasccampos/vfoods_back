import { DataSource } from 'typeorm';
import { Assign } from './entities/assign.entity';

export const assignProviders = [
  {
    provide: 'ASSIGN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Assign),
    inject: ['DATA_SOURCE'],
  },
];
