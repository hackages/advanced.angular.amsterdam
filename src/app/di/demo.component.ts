import {Component, Inject, OnInit} from '@angular/core';
import {GithubService} from './api/github.service';
import {AbstractFacebookService} from './api/facebook.abstract.service';
import {SLACK_API_SERVICE_TOKEN, SlackApiService} from './api/slack.api.service.token';

@Component({
  selector: 'app-demo',
  template: `
    <h2>Github</h2>
    <ul>
      <li *ngFor="let user of users">{{user}}</li>
    </ul>
    <h2>Facebook pictures</h2>
    <ul>
      <li *ngFor="let pic of pictures">{{pic}}</li>
    </ul>
    <h2>Slack message</h2>
    <ul>
      <li *ngFor="let msg of messages">{{msg}}</li>
    </ul>
  `
})
export class DemoComponent implements OnInit {
  users: string[];
  pictures: string[];
  messages: string[];

  constructor(
    private github: GithubService,
    private facebook: AbstractFacebookService,
    @Inject(SLACK_API_SERVICE_TOKEN) private slack: SlackApiService
  ) {
  }

  ngOnInit() {
    this.users = this.github.getUsers();
    this.pictures = this.facebook.pictures();
    this.messages = this.slack.getMessages();
  }
}
