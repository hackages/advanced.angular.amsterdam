import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {SLACK_API_TOKEN} from './slack.api.token';


export class SlackService {
  constructor(private http: HttpClient, @Inject(SLACK_API_TOKEN) private token: string) {
  }

  getMessages(): string[] {
    return ['message1', 'message2'];
  }
}
