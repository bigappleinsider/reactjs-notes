## Angular

```
install angular cli
npm install -g angular-cli

ng new angular2-fundamentals
ng serve

Install atom-typescript

ng generate component simple-form --inline-template --inline-style
short: ng g c simple-form -it -is


```
## Element refs
```
<input #myInput type="text">
<button (click)="myClick($event, myInput.value)">Click me event!</button>
<button (mouseover)="myClick($event, myInput.value)">Click me event!</button>
```
## Generate a service
```
ng g s mail
WARNING Service is generated but not provided, it must be provided to be used

providers: [MailService],
constructor(private mail:MailService)
No need to import
providers: [
  {provide: 'mail', useClass: MailService},
  {provide: 'api', provideValue: 'http://localhost:3000'}
]
constructor(@Inject('mail') private mail)
```
() represent event
[] represent pushing values in
[(ngModel)]="message" two way binding
