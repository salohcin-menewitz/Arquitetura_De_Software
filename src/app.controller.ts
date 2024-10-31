import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Clients from './clients';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Clients)
    private clientsRepository: Repository<Clients>
  ){}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('my-first-route')
  async myFirstRoute(@Query('name') name:string) : Promise<any> {
   return await this.clientsRepository.findOne({
    where:{
      name
    }
   })
  }

}
