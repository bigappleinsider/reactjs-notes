import {Component, Inject} from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form>
    </app-simple-form>
    {{mail.message}}
    <ul>
    <li *ngFor="let item of mail.items">
      {{item.text}}
    </li>
    </ul>
    <app-simple-form 
      *ngFor="let item of mail.items"
      [item]="item.text"
      (update)="onUpdate(item.id, $event.text)"
      >
    </app-simple-form>
  </div>
  `,
  styles: [`
  app-simple-form{
    margin-bottom: 10px;
  }
`]
})
export class AppComponent {
  title = "lets";
  onUpdate(id, text){
    this.mail.update(id, text);
    console.log(id, text);
  }
  constructor(@Inject('mail') private mail){

  }
}
