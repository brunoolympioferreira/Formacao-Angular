import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteButtonAllComponent } from './todo-delete-button-all.component';

describe('TodoDeleteButtonAllComponent', () => {
  let component: TodoDeleteButtonAllComponent;
  let fixture: ComponentFixture<TodoDeleteButtonAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeleteButtonAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeleteButtonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
