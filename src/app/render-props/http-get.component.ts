import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-http-get',
  template: `

  `
})
export class HttpGetComponent implements OnChanges {
  @Input() url: string;
  @Input() options: any;

  ngOnChanges(changes: SimpleChanges): void {
  }
}
