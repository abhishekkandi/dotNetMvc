import { Component, OnInit } from '@angular/core';

import TodoItem from './todoItem';
import ApiService from '../app/shared/api.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todoItems: Array<TodoItem>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAllTodoItems().subscribe(data => {
      this.todoItems = data;
    });
  }
}
