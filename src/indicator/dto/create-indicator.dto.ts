import { ApiProperty } from "@nestjs/swagger";
export class CreateIndicatorDto {
    @ApiProperty({
        description: 'id_indicador: identificador unico do indicador',
        required: true,
    })
    id_indicator: number;  
   
    @ApiProperty({
        description: 'id_gestor: Id do gestor que atribuiu o indicador ao colaborador',
        required: true,
    })
    id_gestor: string;
  
    @ApiProperty({
        description: 'name: nome do Indicator',
        required: true,
    })
    name: string;
  
     @ApiProperty({
        description: 'Description: descrição do Indicator',
        required: true,
    })
    Description: string;
}
