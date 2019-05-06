import {Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-get',
  template: `
    <ng-container *ngTemplateOutlet="layoutTemplate; context: context">
    </ng-container>
  `
})
export class HttpGetComponent implements OnChanges {
  @Input() url: string;
  @Input() options: any;

  context = {};

  @ContentChild(TemplateRef)
  @Input()
  layoutTemplate: TemplateRef<any>;

  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.http.get(this.url, this.options).subscribe(
        data => {
          this.context = data;
        },
        error => {
          this.context = {};
          console.error('Error Fetching', error);
        }
      );
    }
  }
}
