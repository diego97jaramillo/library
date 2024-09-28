import { Controller, Get, Post, Body, Delete, Param, ParseUUIDPipe, HttpException, HttpStatus, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { MissingDeleteDateColumnError } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("author")
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}


  @Post()
  createOneAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    try {
      return this.authorService.createAuthor(createAuthorDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Get()
  findAllAuthors() {
    try {
      return this.authorService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  @Delete(':id')
  deleteOneAuthor(@Param("id", ParseUUIDPipe) id: string) {
    return this.authorService.deleteAuthor(id)
  }
}
