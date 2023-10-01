import { ApiProperty } from '@nestjs/swagger';

export class WhereAssignDto {
  @ApiProperty({
    description: 'The month of the assign',
    required: true,
  })
  month: number;

  @ApiProperty({
    description: 'The year of the assign',
    required: true,
  })
  year: number;

  @ApiProperty({
    description: 'The id of the colaborator',
    required: true,
  })
  colaboratorId: number;

  @ApiProperty({
    description: 'The id of the indicator',
    required: true,
  })
  indicatorId: number;
}
