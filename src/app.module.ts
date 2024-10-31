import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import Clients from './clients'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'positivo',
    database: 'aula31',
    entities: [Clients],
    synchronize: false
  }),
  TypeOrmModule.forFeature([Clients])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
