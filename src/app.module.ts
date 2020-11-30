import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  //Controller: get url, execte unction
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
