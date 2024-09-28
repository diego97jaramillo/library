import { Transform } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Author } from "src/author/entities/author.entity"
import { Tgenre } from "src/common/types/type"

export class CreateBookDto {

    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    publicationDate: Date

    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsNotEmpty()
    @IsString()
    genre: Tgenre

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    author: Author
}
