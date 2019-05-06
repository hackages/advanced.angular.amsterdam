import {Component, Directive, OnInit} from '@angular/core';

@Directive({
  selector:
    'app-simple-card-head,appSimpleCardHead,[appSimpleCardHead]'
})
export class SimpleCardHeadDirective {
}

@Component({
  selector: 'app-simple-card-final',
  template: `
    <div class="card">
      <ng-content select="img"></ng-content>
      <div class="card-details">
        <ng-content select="app-simple-card-head,[appSimpleCardHead]"></ng-content>
        <ng-content></ng-content>
        <ng-content select=".card-action-button"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardFinalComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
