import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

   createOrder(orderDto: any) {
   try {
    this.paymentClient.emit('order_created', orderDto);
    this.notificationClient.emit('order_created', orderDto);
    console.log('Notification sended');
   } catch (error) {
    console.log('Notification yuborishda xatolik',error);
   }
     
    
  }
}
