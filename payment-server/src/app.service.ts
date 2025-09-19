import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data:any) {
    console.log('Hello World!: ',data);
  }
}
