import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-attribute-directive-demo',
  template: `
    <h1>Custom directive</h1>
    <h2 appHidden>I am hidden</h2>
    <h2 appClassSetter> Hello world</h2>
    <h2 appClick> Listening the click</h2>
    <span href="http://www.w3c.org"
          class="link"
          appConfigurationAriaRole="button">
      Activate this link using the space bar or enter key
    </span>
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
