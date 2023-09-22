/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateColaboratorDto {
    @ApiProperty({
    description: 'The name of the Colaborator',
    required: true,
    })
    name: string;

    @ApiProperty({
        description: 'The password of the Colaborator',
        required: true,
    })
    password: string;

    @ApiProperty({
        description: 'The email of the Colaborator',
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'The id of the responsible(User/Gestor)',
        required: true,
    })
    id_gestor: string;

    @ApiProperty({
        description: 'The CEP of the Colaborator',
        required: true,
    })
    CEP: string;

    @ApiProperty({
        description: 'The date birthday of the Colaborator',
        required: true,
    })
    dateBirth: Date;

}
