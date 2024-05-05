import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDetail(): string {
    return 'He are zoo detail page!';
  }
}
