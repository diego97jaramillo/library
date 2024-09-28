import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Book } from "src/book/entities/book.entity"

export class CreateAuthorDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsString()
    lastName: string
}
