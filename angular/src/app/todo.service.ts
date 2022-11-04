import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  usertodo : Todo[] = [
    {
      id: 1,
      title: 'fare la torta',
      completed: false
    },
    {
      id: 2,
      title: 'fare benzina',
      completed: true
    }
  ]
  constructor() { }

  addUser(obj: Todo) {
    this.usertodo.push(obj)
  }
}
