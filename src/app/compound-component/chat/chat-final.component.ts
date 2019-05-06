import {AfterContentInit, Component, ContentChild, ContentChildren} from '@angular/core';
import {ChatMessagesComponent} from './chat-messages.component';
import {ChatInputComponent} from './chat-input.component';
import {ChatButtonComponent} from './chat-button.component';

@Component({
  selector: 'app-chat-final',
  template: `
    <div>
      <h3>Chatroom Final</h3>
      <ng-content></ng-content>
    </div>
  `
})
export class ChatFinalComponent implements AfterContentInit {
  messages = [];
  currentMessage = '';

  @ContentChild(ChatMessagesComponent) messagesCmp: ChatMessagesComponent;
  @ContentChild(ChatInputComponent) inputCmp: ChatInputComponent;
  @ContentChild(ChatButtonComponent) buttonCmp: ChatButtonComponent;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.inputCmp.value = this.currentMessage;

    this.buttonCmp.click.subscribe(_ => {
      if (this.currentMessage) {
        this.messages = [...this.messages, this.currentMessage];
        this.currentMessage = '';
      }
      this.inputCmp.value = this.currentMessage;
      this.messagesCmp.messages = this.messages;
    });

    this.inputCmp.messageChange.subscribe(value => {
      this.currentMessage = value;
    });
  }
}
