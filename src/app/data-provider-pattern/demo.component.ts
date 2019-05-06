import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-provider-pattern-demo',
  template: `
    <h1>Data provider pattern</h1>
    <app-data-provider key="theme" [data]="{ theme: 'dark' }">
      <app-data-consumer key="theme">
        <ng-template let-theme="theme">
          Theme: {{theme}}
        </ng-template>
      </app-data-consumer>
    </app-data-provider>
  `
})
export class DemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
