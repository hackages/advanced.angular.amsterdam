import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-data-consumer',
  template: `
  `
})
export class DataConsumerComponent implements OnChanges {
  @Input()
  key: string;

  ngOnChanges(changes: SimpleChanges): void {
  }
}
