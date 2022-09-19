import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUniversityDto  {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @IsArray()
    @IsString({each: true})
    domains?: string[];

    @IsOptional()
    @IsArray()
    @IsString({each: true})
    web_pages?: string[];
}
