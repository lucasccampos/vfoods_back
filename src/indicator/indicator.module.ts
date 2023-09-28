import { Module } from '@nestjs/common';
import { IndicatorService } from './indicator.service';
import { IndicatorController } from './indicator.controller';
import { indicatorProviders } from './indicator.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IndicatorController],
  providers: [IndicatorService, ...indicatorProviders],
})
export class IndicatorModule {}
