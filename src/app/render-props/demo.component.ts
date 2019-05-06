import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-render-props-demo',
  template: `
    <h1>Render props</h1>
    <div>
      <h1>Github User</h1>
      Username ({{username}}) : <input type="text" [(ngModel)]="username"/>
      <app-github-user [username]="username">
        <!-- Element to be rendered-->
        <!--<div>-->
        <!--<p>-->
        <!--Username is {{login}}-->
        <!--</p>-->
        <!--<img *ngIf="avatar" [src]="avatar"/>-->
        <!--</div>-->
      </app-github-user>
      <hr/>
      <app-http-get [url]="url">
        <!-- Element to be rendered-->
        <!--<img *ngIf="login" [src]="login"/>-->
      </app-http-get>
    </div>
  `,
})
export class DemoComponent implements OnInit {
  username = 'octocat';
  url = `https://api.github.com/users/hackages`;
  options = {};

  constructor() {
  }

  ngOnInit(): void {
  }
}
