import { ApiParam, ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { PaginationParams } from "src/shared/pagination/pagination.params";

export class PaginationUniversity extends PaginationParams {

    @ApiProperty({
        name: 'country',
        description: 'filter by a country',
        required: false,
        example: 'Argentina'
    })
    @IsOptional()
    @IsString()
    country?: string;

    @ApiProperty({
        description: 'returns all records',
        required: false,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    all?: boolean;
}