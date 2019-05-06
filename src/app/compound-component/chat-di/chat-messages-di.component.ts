import {Component, OnInit} from '@angular/core';
import {ChatFinalDiComponent} from './chat-final-di.component';

@Component({
  selector: 'app-chat-messages-di',
  template: `
    <ul>
      <li *ngIf="chat.messages?.length===0"> No messages</li>
      <li *ngFor="let msg of chat.messages">{{msg}}</li>
    </ul>
  `
})
export class ChatMessagesDiComponent implements OnInit {
  constructor(public chat: ChatFinalDiComponent) {
  }

  ngOnInit() {
  }
}
