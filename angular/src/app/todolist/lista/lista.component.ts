import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/classes/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  constructor(private usertodo: TodoService) { }

  Todo = this.usertodo;
  
  

  ngOnInit(): void {
  }

}
