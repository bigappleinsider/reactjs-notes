import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <h4>{{item}}</h4>
    <!-- two way binding -->
    <input 
      type="text" 
      #myInput [(ngModel)]="item"
      [ngClass]="{mousedown:isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"
      >
    <button 
    class="white bg-black code" 
    (click)="onClick($event, myInput.value)">Click me!</button>
    <button (click)="update.emit({text:item})">Click me too!</button>
    
  `,
  styles: [`
:host{
  display: flex;
  flex-direction: column;
}
.mousedown{
  border: 2px solid green;
}
*{
  font-family: monospace;
}
input:focus{
  font-weight: bold;
  outline: none;
}
button{
  border: none;
}
`]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;
  @Input() item;

  @Output() update = new EventEmitter();

  onClick(e, value){
    console.log('clicked!', e, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
