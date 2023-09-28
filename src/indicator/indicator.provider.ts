import { DataSource } from 'typeorm';
import { Indicator } from './entities/indicator.entity';

export const indicatorProviders = [
  {
    provide: 'INDICATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Indicator),
    inject: ['DATA_SOURCE'],
  },
];
