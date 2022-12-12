import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {
  @Get('/items')
  async getAllItems() {
    return 'Hello world!';
  }
}
