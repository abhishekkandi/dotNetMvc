import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
