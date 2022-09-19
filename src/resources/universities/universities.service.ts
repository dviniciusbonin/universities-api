import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University, UniversityDocument } from './schemas/university.schema';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectModel(University.name)
    private readonly universityModel: Model<UniversityDocument>
  ) { }
  async create(createUniversityDto: CreateUniversityDto) {
    const universityAlreadyExist = await this.universityModel.find({
      country: createUniversityDto.country,
      "state-province": createUniversityDto['state-province'],
      name: createUniversityDto.name
    }).exec();

    if (universityAlreadyExist) {
      throw new ForbiddenException('University already exists with this country/state-province/name');
    }

    const createUniversity = new this.universityModel(createUniversityDto);
    return createUniversity.save();
  }

  findAll(country: string, page: number, all: boolean = false) {
    if (all)
      return this.universityModel.find(country ? { country } : {});

    return this.universityModel.find(country ? { country } : {}).skip(--page * 20).limit(20);
  }

  findOne(id: string) {
    return this.universityModel.findById({
      _id: id
    }).exec();
  }

  update(id: string, updateUniversityDto: UpdateUniversityDto) {
    return this.universityModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: updateUniversityDto.name,
          domains: updateUniversityDto.domains,
          web_pages: updateUniversityDto.web_pages
        }
      },
      { new: true },
    );
  }

  remove(id: string) {
    return this.universityModel.deleteOne({
      _id: id
    }).exec();
  }
}
