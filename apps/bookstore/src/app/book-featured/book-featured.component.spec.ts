import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFeaturedComponent } from './book-featured.component';

describe('BookFeaturedComponent', () => {
  let component: BookFeaturedComponent;
  let fixture: ComponentFixture<BookFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
