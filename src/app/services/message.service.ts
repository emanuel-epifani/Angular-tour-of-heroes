import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];


  constructor() { }

  add(message: string) { //aggiungo un messaggio all'array di stringhe "messages"
    this.messages.push(message);
  }

  clear() { //pulisco l'array di stringhe "messages"
    this.messages = [];
  }
}
