/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';


export class CreateAssignDto {
    // month variable
    @ApiProperty({
        description: 'The month of the assign',
        required: true,
    })
    month: number;

    // year variable
    @ApiProperty({
        description: 'The year of the assign',
        required: true,
    })
    year: number;

    // id_colaborator variable
    @ApiProperty({
        description: 'The id of the colaborator',
        required: true,
    })
    id_colaborator: number;

    // id_indicator variable
    @ApiProperty({
        description: 'The id of the indicator',
        required: true,
    })
    id_indicator: number;

    // weight variable
    @ApiProperty({
        description: 'The weight of the assign',
        required: true,
    })
    weight: number;

    // meta variable
    @ApiProperty({
        description: 'The meta of the assign',
        required: true,
    })
    meta: number;

    // super_meta variable
    @ApiProperty({
        description: 'The super meta of the assign',
        required: true,
    })
    super_meta: number;

    // challenge variable
    @ApiProperty({
        description: 'The challenge of the assign',
        required: true,
    })
    challenge: number;

    // result variable
    @ApiProperty({
        description: 'The result of the assign',
        required: false,
    })
    result: number;

    // result_date variable
    @ApiProperty({
        description: 'The result date of the assign',
        required: false,
    })
    result_date: Date;
}
