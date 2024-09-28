import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roldecorator } from 'src/common/decorators/role.decorator';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("books")
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Roldecorator("admin")

  @Post()
  createOneBook(@Body() createBookDto: CreateBookDto) {

    try {
      return this.bookService.createOne(createBookDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  @Get()
  findAllBooks() {
    try {
      return this.bookService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  @Get(':id')
  findOneBook(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateOne(id, updateBookDto);
  }

  @Delete(':id')
  removeBook(@Param('id') id: string) {
    return this.bookService.deleteOne(id);
  }
}
