import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitiesModule } from './resources/universities/universities.module';
import { SeedsModule } from './shared/seeds.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    SeedsModule,
    UniversitiesModule
  ],
})
export class AppModule {}
