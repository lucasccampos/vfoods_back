import { Module } from '@nestjs/common';
import { ColaboratorService } from './colaborator.service';
import { ColaboratorController } from './colaborator.controller';
import { DatabaseModule } from 'src/database/database.module';
import { colaboratorProviders } from './colaborator.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ColaboratorController],
  providers: [ColaboratorService, ...colaboratorProviders],
  exports: [ColaboratorService],
})
export class ColaboratorModule {}
