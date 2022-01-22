import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from '../todo/todo.component'

import AppService from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
