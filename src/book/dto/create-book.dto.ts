import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Author } from "src/author/entities/author.entity"
import { Tgenre } from "src/common/types/type"

export class CreateBookDto {

    @IsNotEmpty()
    @Transform(({value}) => value ? new Date(value) : null)
    publicationDate: Date

    @IsNotEmpty()
    @IsNumber()
    Quantity: number

    @IsNotEmpty()
    @IsString()
    Genre: Tgenre

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsUUID()
    author: Author
}
