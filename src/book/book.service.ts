import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { AuthorService } from 'src/author/author.service';


@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  private readonly authorService: AuthorService) {}

  createOne(createBookDto: CreateBookDto) {
    try {
      const bookCreated = this.bookRepository.create(createBookDto)
      return this.bookRepository.save(bookCreated)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findAll() {
    try {
      const books = await this.bookRepository.find({relations:{author: true}})
      return books
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findOne(id: string) {
    const book = await this.bookRepository.findOne({where: {id}, relations: {author: true}});
    if (!book) {
      throw new NotFoundException(`book with id: ${id} was not found`)
    }
    return book
  }

  async updateOne(id: string, updateBookDto: UpdateBookDto) {
    let bookfound = await this.findOne(id)
    if(!bookfound) {
      throw new NotFoundException(`book with id: ${id} was not found`)
    }
    const result = await this.bookRepository.update(id, updateBookDto)
    bookfound = await this.findOne(id)
    return {Bookupdated: bookfound, result}
  }

  async deleteOne(id: string) {
    const bookfound = await this.findOne(id)
    if (!bookfound) {
      throw new NotFoundException(`book with id: ${id} was not found`)
    }
    return this.bookRepository.delete(id)
  }
}
