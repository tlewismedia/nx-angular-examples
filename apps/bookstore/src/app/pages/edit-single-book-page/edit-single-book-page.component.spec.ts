import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleBookPageComponent } from './edit-single-book-page.component';

describe('EditSingleBookPageComponent', () => {
  let component: EditSingleBookPageComponent;
  let fixture: ComponentFixture<EditSingleBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSingleBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
