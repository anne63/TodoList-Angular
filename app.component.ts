//import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/todo-item'
//import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
//import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="app-title">
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
}

//test....