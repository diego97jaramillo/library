import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Author } from "src/author/entities/author.entity"
import { Tgenre } from "src/common/types/type"

export class CreateBookDto {

    @ApiProperty()
    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    publicationDate: Date

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    genre: Tgenre

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    author: Author
}
