import {Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github-user',
  template: `
    <ng-container *ngTemplateOutlet="layoutTemplate; context: context">
    </ng-container>
  `
})
export class GithubUserComponent implements OnChanges {
  @Input() username: string;

  context = {};

  @ContentChild(TemplateRef)
  @Input()
  layoutTemplate: TemplateRef<any>;

  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.username) {
      this.http.get(`https://api.github.com/users/${this.username}`).subscribe(
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
