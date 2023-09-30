import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignController } from './assign.controller';
import { assignProviders } from './assign.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssignController],
  providers: [AssignService, ...assignProviders],
  exports: [AssignService],
})
export class AssignModule {}
