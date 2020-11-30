import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesServices: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesServices.getAll();
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesServices.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesServices.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesServices.deleteOne(movieId);
  }

  //전체 업데이트시, @Put, 일부분만 업데이트시 @Patch
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesServices.update(movieId, updateData);
  }
}
