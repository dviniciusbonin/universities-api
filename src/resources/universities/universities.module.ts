import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { University, UniversitySchema } from './schemas/university.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: University.name, schema: UniversitySchema }])],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
  exports: [UniversitiesService]
})
export class UniversitiesModule {}
