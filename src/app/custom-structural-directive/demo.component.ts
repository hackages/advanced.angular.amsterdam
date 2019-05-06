import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive-demo',
  template: `
    <h1>Custom Structural directive</h1>
    <h2 *appHasPermission="'admin'">Has the permission: admin</h2>
    <h2 *appHasPermission="'member'">Has not the permission: member</h2>
  `,
  styles: [
      `
      .details {
        color: rebeccapurple;
      }
    `
  ]
})
export class DemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
