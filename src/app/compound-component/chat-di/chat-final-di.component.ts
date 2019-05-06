import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-final-di',
  template: `
    <div>
      <h3>Chatroom Di</h3>
      <ng-content></ng-content>
    </div>
  `
})
export class ChatFinalDiComponent {
  messages = [];
  currentMessage = '';

  constructor() {
  }

  updateCurrentMessage(currentMessage) {
    this.currentMessage = currentMessage;
  }

  add() {
    if (this.currentMessage) {
      this.messages = [...this.messages, this.currentMessage];
      this.currentMessage = '';
    }
  }
}
