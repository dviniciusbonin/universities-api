import { IsArray, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateUniversityDto {

    @IsNotEmpty()
    @IsString()
    @Length(2)
    alpha_two_code: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    'state-province'?: string;
    
    @IsArray()
    @IsString({each: true})
    domains: string[];

    @IsArray()
    @IsString({each: true})
    web_pages: string[];
}
