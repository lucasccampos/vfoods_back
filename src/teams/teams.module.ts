import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { teamsProviders } from './teams.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [TeamsService, ...teamsProviders],
  exports: [TeamsService],
})
export class TeamsModule {}
