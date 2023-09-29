/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateColaboratorDto {
    @ApiProperty({
    description: 'The name of the Colaborator',
    required: true,
    })
    name: string;

    @ApiProperty({
        description: 'The email of the Colaborator',
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'The cellphone of the Colaborator',
        required: true,
    })
    cellphone: string;

    @ApiProperty({
        description: 'The imgURL of the Colaborator',
        required: false,
    })
    imgURL: string;

    @ApiProperty({
        description: 'The date birthday of the Colaborator',
        required: true,
    })
    dateBirth: Date;

}
