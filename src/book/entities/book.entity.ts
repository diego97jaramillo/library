import { Author } from "src/author/entities/author.entity";
import { Tgenre } from "src/common/types/type";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('books')
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    title: string

    @Column("text")
    genre: Tgenre

    @Column("text")
    quantity: number

    @ManyToOne(() => Author, author => author.books)
    author: Author;
}
