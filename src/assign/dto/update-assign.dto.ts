import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAssignDto } from './create-assign.dto';
import { WhereAssignDto } from './where-assign.dto';

export class UpdateAssignDto {
  @ApiProperty({
    description: 'The changes to the assign',
    required: true,
  })
  changes: CreateAssignDto;

  @ApiProperty({
    description: 'The where clause to update the assign',
    required: true,
  })
  where: WhereAssignDto;
}
