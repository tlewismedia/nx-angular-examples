import { Injectable } from '@nestjs/common';
import { Book } from '@myorg5/data';


@Injectable()
export class AppService {
  books: Book[] = [
    { 
      title: 'Title1',
      author: 'Author1',
      rating: 5,
      desc: 'Lorem Ipsum'
    }, 
    { 
      title: 'Title2',
      author: 'Author2',
      rating: 4,
      desc: 'dolor sit amet'
    }
  ];

  getData(): Book[] {
    return this.books;
  }
}
