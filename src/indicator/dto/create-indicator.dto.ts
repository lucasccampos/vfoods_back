/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class CreateIndicatorDto {
    @ApiProperty({
        type: String,
        description: 'name of the indicator',
        required: true,
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'description of the indicator',
        required: true,
    })
    description: string;
}
