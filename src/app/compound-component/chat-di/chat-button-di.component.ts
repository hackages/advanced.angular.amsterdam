import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatFinalDiComponent} from './chat-final-di.component';

@Component({
  selector: 'app-chat-button-di',
  template: `
    <button (click)="chat.add()">Add</button>
  `,
})
export class ChatButtonDiComponent implements OnInit {
  @Output() click = new EventEmitter<void>();

  constructor(public chat: ChatFinalDiComponent) {
  }

  ngOnInit() {
  }

}
