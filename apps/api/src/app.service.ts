import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@monorepo/shared';

@Injectable()
export class AppService {
  getHello() {
    return new CreateUserDto();
  }
}
