import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {DataProviderService} from './data-provider.service';

@Component({
  selector: 'app-data-provider',
  template: '<ng-content></ng-content>'
})
export class DataProviderComponent implements OnChanges {
  @Input()
  key: string;
  @Input()
  data: any;

  constructor(private providerService: DataProviderService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { key, data } = changes;
    if (key || data) {
      if (this.key && this.data) {
        this.providerService.setProvider(this.key, this.data);
      }
    }
  }
}
