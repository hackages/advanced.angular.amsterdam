import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {ChatMessagesComponent} from './chat-messages.component';
import {ChatInputComponent} from './chat-input.component';
import {ChatButtonComponent} from './chat-button.component';
import {mergeAll} from 'rxjs/operators';
import {from} from 'rxjs';

@Component({
  selector: 'app-chat-final-multiple',
  template: `
    <div>
      <h3>Chatroom Mutiple children</h3>
      <ng-content></ng-content>
    </div>
  `
})
export class ChatFinalMultipleComponent implements AfterContentInit {
  messages = [];
  currentMessage = '';

  @ContentChildren(ChatMessagesComponent)
  messagesCmp: QueryList<ChatMessagesComponent>;
  @ContentChildren(ChatInputComponent) inputCmp: QueryList<ChatInputComponent>;
  @ContentChildren(ChatButtonComponent)
  buttonCmp: QueryList<ChatButtonComponent>;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.updateValueInputCmp(this.currentMessage);

    from(
      this.buttonCmp.map(cmp => {
        return cmp.click.asObservable();
      })
    )
      .pipe(mergeAll())
      .subscribe(_ => {
        if (this.currentMessage) {
          this.messages = [...this.messages, this.currentMessage];
          this.currentMessage = '';
        }

        this.updateValueInputCmp(this.currentMessage);
        this.updateMessagesMessagesCmp(this.messages);
      });

    from(
      this.inputCmp.map(cmp => {
        return cmp.messageChange.asObservable();
      })
    )
      .pipe(mergeAll())
      .subscribe((value: string) => {
        this.currentMessage = value;
        this.updateValueInputCmp(this.currentMessage);
      });
  }

  updateValueInputCmp(currentMessage) {
    this.inputCmp.forEach(cmp => {
      cmp.value = currentMessage;
    });
  }

  updateMessagesMessagesCmp(messages) {
    this.messagesCmp.forEach(cmp => {
      cmp.messages = messages;
    });
  }
}
