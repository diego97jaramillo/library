import { ForbiddenException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author> ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto) {
    try {
      const authorCreated = this.authorRepository.create(createAuthorDto)
      const author = await this.authorRepository.save(authorCreated)
      return {author}
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  findAll() {
    try {
      return this.authorRepository.find()
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  deleteAuthor(id:string) {
    return this.authorRepository.delete(id)
  }

  async findOneAuthor(id: string) {
    return await this.authorRepository.findOne({where: {id}})
  }
}
