import { PartialType } from '@nestjs/swagger';
import { CreateColaboratorDto } from './create-colaborator.dto';

export class UpdateColaboratorDto extends PartialType(CreateColaboratorDto) {}
