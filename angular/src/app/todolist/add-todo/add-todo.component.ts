import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  createtodo: Todo = new Todo();

  constructor(private usertodo: TodoService) { }

  ngOnInit(): void {
  }

  
  addtodo(obj: Todo){
    this.usertodo.addUser(obj)
    this.createtodo = new Todo();
  }
}
