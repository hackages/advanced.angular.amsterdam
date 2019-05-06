import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor-demo',
  template: `
    <h1>Control Value Accessor</h1>
    <h3>Normal</h3>
    <pre>{{datePicker | json}}</pre>
    <app-date-picker [value]="datePicker" (valueChange)="datePicker=$event"></app-date-picker>
    <h3>With FormControl</h3>
    <pre>{{datepickerControl.value | json}}</pre>
    <app-date-picker-accessor [formControl]="datepickerControl"></app-date-picker-accessor>

  `
})
export class DemoComponent implements OnInit {
  datePicker: {};

  datepickerControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }
}
