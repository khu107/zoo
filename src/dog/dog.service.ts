import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  getHello(): string {
    return 'WOW-WOW';
  }

  introduce(): string {
    return 'My name is REX!';
  }

  modifyDetail(): string {
    return 'Successfully Modified';
  }
}
