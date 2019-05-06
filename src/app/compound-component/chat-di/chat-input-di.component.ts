import {Component} from '@angular/core';
import {ChatFinalDiComponent} from './chat-final-di.component';

@Component({
  selector: 'app-chat-input-di',
  template: `
    <input type="text" [value]="chat.currentMessage" (input)="chat.updateCurrentMessage($event.target.value)"/>
  `
})
export class ChatInputDiComponent {

  constructor(public chat: ChatFinalDiComponent) {
  }
}
