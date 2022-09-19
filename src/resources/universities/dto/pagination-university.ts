import { IsBoolean, IsOptional, IsString } from "class-validator";
import { PaginationParams } from "src/shared/pagination/pagination.params";

export class PaginationUniversity extends PaginationParams {
    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsBoolean()
    all?: boolean;
}