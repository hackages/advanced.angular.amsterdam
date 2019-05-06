import {Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: 'app-data-consumer',
  template: `
    <ng-container *ngTemplateOutlet="renderTemplate;
    context: data$ | async">
    </ng-container>
  `
})
export class DataConsumerComponent implements OnChanges {
  @Input()
  key: string;

  @Input()
  @ContentChild(TemplateRef)
  renderTemplate: TemplateRef<any>;

  data$: Observable<any>;

  constructor(private providerService: DataProviderService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { key } = changes;
    if (key) {
      this.data$ = this.providerService.providers[this.key];
    }
  }
}
