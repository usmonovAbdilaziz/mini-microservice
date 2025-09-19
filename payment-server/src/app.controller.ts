import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('order_created')
  getHello(data:any){
    return this.appService.getHello(data);
  }
}
