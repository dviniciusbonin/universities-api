import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUniversityDto {
  @ApiProperty({
    example: 'AR',
    maxLength: 2,
    minLength: 2,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Length(2)
  alpha_two_code: string;

  @ApiProperty({
    example: 'Argentina',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty({
    example: 'University name',
    required: true,
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Ciudad Autónoma de Buenos Aires',
    required: false,
  })
  @IsOptional()
  @IsString()
  'state-province'?: string;

  @ApiProperty({
    example: ['university.domain.com'],
    required: true,
    minLength: 1,
    isArray: true
  })
  @IsArray()
  @IsString({ each: true })
  domains: string[];

  @ApiProperty({
    example: ['http://wwww.university.domain.com'],
    required: true,
    minLength: 1,
    isArray: true
  })
  @IsArray()
  @IsString({ each: true })
  web_pages: string[];
}
