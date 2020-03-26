import { Injectable } from '@nestjs/common';

interface Book {
  title: string,
  author: string,
  rating: Number,
  desc: string
}

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
