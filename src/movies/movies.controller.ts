import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id:${movieId}`;
  }

  //전체 업데이트시, @Put, 일부분만 업데이트시 @Patch
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id:${movieId}`;
  }
}
