import { Book } from "src/book/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    name: string

    @Column("text")
    lastName: string

    @Column("numeric")
    age: number

    @OneToMany(() => Book, book => book.author)
    books: Book[]

}
