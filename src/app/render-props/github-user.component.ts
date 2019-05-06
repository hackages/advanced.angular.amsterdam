import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-github-user',
  template: `
  `
})
export class GithubUserComponent implements OnChanges {
  @Input() username: string;

  ngOnChanges(changes: SimpleChanges): void {
  }
}
