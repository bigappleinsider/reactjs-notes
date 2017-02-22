# Angular 2 fundamentals eggheadio notes


ng new angular2-fundamentals
ng serve
would startup the server localhost:4200

ls angular2-fundamentals/src/app
app.component.css     app.component.html    app.component.spec.ts app.component.ts      app.module.ts

## Generate a component
ng generate component simple-form --inline-template --inline-style
or use a shortcut
ng g c simple-form -it -is

## Generate a service
ng generate service mail

prefix in angular-cli config
## Refs to elements
- click, mouseover events
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input type="text" #myInput>
    <button (click)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(e, value){
    console.log('clicked!', e, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
```
## Injecting service
providers: ['MailService']
constructor(private mail:MailService){
OR
providers: [{provide: 'mail', useClass: MailService]
constructor(@Inject('mail') private mail){
OR
providers: [
  {provide: 'mail', useClass: MailService},
  {provide: 'api', useValue: 'http://localhost:3000/'}  
]

