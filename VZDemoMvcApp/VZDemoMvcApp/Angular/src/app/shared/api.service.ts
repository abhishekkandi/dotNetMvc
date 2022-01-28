import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import TodoItem from '../../todo/todoItem';

@Injectable()
export default class ApiService {

  public API = 'http://localhost:55555';
  public TODO_ITEMS_ENDPOINT = `${this.API}/todo`;

  constructor(private http: HttpClient) { }

  getAllTodoItems(): Observable<Array<TodoItem>> {
    return this.http.get<Array<TodoItem>>(this.TODO_ITEMS_ENDPOINT);
  }
}
