import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Pages
import { HomeComponent } from './pages/home/home.component';

//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, TodoListComponent, TodoInputAddItensComponent, TodoButtonDeleteAllComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
