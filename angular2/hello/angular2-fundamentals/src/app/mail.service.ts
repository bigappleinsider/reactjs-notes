import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = `You've got mail`
  messages = [
    `Hello there`,
    `One , two, three`,
    `next message`
  ]
  constructor() { }

}
