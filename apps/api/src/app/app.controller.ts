import { Controller, Get, Post, Body } from '@nestjs/common';
import { Book } from '@myorg5/data';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  getData() {
    return this.appService.getData();
  }

  @Post('books')
  addBook(@Body() book: Book) {
    return this.appService.addBook(book);
  }
}
