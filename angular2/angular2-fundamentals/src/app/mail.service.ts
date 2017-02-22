import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = `hello there`;
  items = [
    {id: 0, text: 'item A'},
    {id: 1, text: 'item B'},
    {id: 2, text: 'item C'}
  ];

  update(id, text){
    this.items = this.items.map(i => i.id === id ? {id, text} : i);
  }
  constructor() { }

}
