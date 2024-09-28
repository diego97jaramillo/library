import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';
import { Tgenre } from 'src/common/types/type';
import { Author } from 'src/author/entities/author.entity';

export class UpdateBookDto extends PartialType(CreateBookDto) {

    @IsOptional()
    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    publicationDate: Date

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsOptional()
    @IsNotEmpty()
    genre: Tgenre

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string

    @IsOptional()
    @IsNotEmpty()
    @IsUUID()
    author: Author
}
