import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  
  constructor(private usertodo: TodoService) { }

  ngOnInit(): void {
  }

}
