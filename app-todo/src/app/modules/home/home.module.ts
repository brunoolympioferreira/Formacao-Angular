import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoDeleteButtonAllComponent } from './components/todo-delete-button-all/todo-delete-button-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoDeleteButtonAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
