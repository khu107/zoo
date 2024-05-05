import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'cat salom';
  }

  public introduce(): string {
    return 'My name is TOM';
  }
}
