import { Component, Inject } from '@angular/core';

import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div>
      <app-simple-form
        *ngFor="let message of mail.messages"
        [anything]="message">

      </app-simple-form>
      <h1>{{mail.message}} | {{api}}</h1>
      <ul>
        <li *ngFor="let message of mail.messages">{{message}}</li>
      </ul>

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! hello';
  constructor(private mail:MailService, @Inject('api') private api){

  }
}
