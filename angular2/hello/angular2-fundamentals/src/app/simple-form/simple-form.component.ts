import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <h2>{{anything}}</h2>
      <input type="text" [(ngModel)]="name">
      <input #myInput type="text">
      <button (click)="onClick(myInput.value)">Click me!</button>
      <button (click)="myClick($event, myInput.value)">Click me event!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() anything;
  name='Jim'

  myClick(event, value){
    console.log(event, value);
  }
  onClick(value){
    console.log('clicked', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
