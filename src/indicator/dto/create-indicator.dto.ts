import { ApiProperty } from "@nestjs/swagger";
export class CreateIndicatorDto {
    @ApiProperty({
        description: 'id_indicador: identificador unico do indicador',
        required: true,
    })
    id_indicator: number;
  
    @ApiProperty({
        description: 'id_colaborador: É o id do colaborador ao qual o indicador foi atribuído',
        required: true,
    })
    id_colaborador: number;
  
    @ApiProperty({
        description: 'id_gestor: Id do gestor que atribuiu o indicador ao colaborador',
        required: true,
    })
    id_gestor: number;
  
    @ApiProperty({
        description: 'name: nome do Indicator',
        required: true,
    })
    name: string;
  
    @ApiProperty({
        description: 'meta: meta do Indicator',
        required: true,
    })
    meta: number;
  
    @ApiProperty({
        description: 'supermeta: supermeta do Indicator',
        required: true,
    })
    supermeta: number;
  
    @ApiProperty({
        description: 'desafio: desafio do Indicator',
        required: true,
    })
    desafio: number;
  
    @ApiProperty({
        description: 'unidadeMedida: unidade de medida do Indicator percentual, financeiro ou numero',
        required: true,
    })
    unidadeMedida: string;

    @ApiProperty({
        description: 'mes: mes do Indicator',
        required: true,
    })
    mes: Date;
  
     @ApiProperty({
        description: 'Description: descrição do Indicator',
        required: true,
    })
    Description: string;
}
