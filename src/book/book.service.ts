import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  createBook(createBookDto: CreateBookDto) {
    try {
      const bookCreated = this.bookRepository.create(createBookDto)
      return this.bookRepository.save(bookCreated)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  findAll() {
    try {
      return this.bookRepository.find()
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
