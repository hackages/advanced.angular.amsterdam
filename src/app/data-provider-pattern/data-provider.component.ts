import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-data-provider',
  template: ''
})
export class DataProviderComponent implements OnChanges {
  @Input()
  key: string;
  @Input()
  data: any;

  ngOnChanges(changes: SimpleChanges): void {
  }
}
