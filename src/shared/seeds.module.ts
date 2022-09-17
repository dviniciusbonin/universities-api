import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UniversitiesModule } from 'src/resources/universities/universities.module';
import { UniversitiesService } from 'src/resources/universities/universities.service';
import { UniversitiesSeed } from '../resources/universities/seeds/univeristies.seeds';

@Module({
    imports: [CommandModule, UniversitiesModule],
    providers: [UniversitiesSeed]
})
export class SeedsModule { }