import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '@myorg5/data';

@Pipe({
  name: 'bestN'
})
export class BestNPipe implements PipeTransform {

  transform(books: Book[], count: number): Book[] {
    
    if (books) {
      return books.sort(compareObjectsOnKey('rating')).reverse().slice(0,count);
    }
  }

}

function compareObjectsOnKey(key) {
  return function(a, b) {
    if (a[key] < b[key]) {
      return -1;
    }

    if (a[key] > b[key]) {
      return 1;
    }

    return 0;
  }
}
