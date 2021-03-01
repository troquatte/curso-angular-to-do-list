import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddItensComponent } from './todo-input-add-itens.component';

describe('TodoInputAddItensComponent', () => {
  let component: TodoInputAddItensComponent;
  let fixture: ComponentFixture<TodoInputAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
