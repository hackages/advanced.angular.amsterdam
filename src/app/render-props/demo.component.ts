import { Component } from '@angular/core';

@Component({
  selector: 'app-render-props-demo',
  template: `
    <h1>Render props</h1>
    <div>
      <h1>Github User</h1>
      Username ({{username}}) : <input type="text" [(ngModel)]="username"/>
      <app-github-user [username]="username">
        <ng-template let-login="login" let-avatar="avatar_url">
          <div>
            <p>
              Username is {{login}}
            </p>
            <img *ngIf="avatar" [src]="avatar"/>
          </div>
        </ng-template>
      </app-github-user>
      <hr/>
      <app-http-get [url]="url">
        <ng-template let-login="avatar_url">
          <img *ngIf="login" [src]="login"/>
        </ng-template>
      </app-http-get>
    </div>
  `
})
export class DemoComponent {
  username = 'octocat';
  url = `https://api.github.com/users/hackages`;
  options = {};
}
