import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  //Controller: get url, execte unction
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
