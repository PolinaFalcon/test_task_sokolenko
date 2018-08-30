import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPersonComponent } from './list-of-person.component';

describe('ListOfPersonComponent', () => {
  let component: ListOfPersonComponent;
  let fixture: ComponentFixture<ListOfPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
