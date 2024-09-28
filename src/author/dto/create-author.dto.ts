import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { Book } from "src/book/entities/book.entity"

export class CreateAuthorDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    age: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string
}
