import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUniversityDto {
  @ApiProperty({
    example: 'University name',
    uniqueItems: true,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({
    example: ['university.domain.com'],
    isArray: true,
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  domains?: string[];

  @ApiProperty({
    example: ['http://wwww.university.domain.com'],
    required: false,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  web_pages?: string[];
}
