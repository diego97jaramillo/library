import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { Book } from './book/entities/book.entity';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: +configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USERNAME'),
      password: configService.get('POSTGRES_PASSWORD'),
      autoLoadEntities: true,
      synchronize: true,
    }),
  }),
    BookModule,
    AuthorModule]

})
export class AppModule {}
