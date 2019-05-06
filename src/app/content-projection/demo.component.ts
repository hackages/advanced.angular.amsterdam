import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-projection-demo',
  template: `
    <h1>Simple material design card</h1>
    <app-simple-card></app-simple-card>
    <hr/>
    <h2>Refactored component using ng-content</h2>
    <app-simple-card-final>
      <img src="https://s13.postimg.cc/5al19x0d3/media_img.jpg" class="card-media"/>
      <h2 appSimpleCardHead class="card-head">Kangaroo Valley Safari</h2>
      <!--<app-simple-card-head>-->
        <!--<h2 class="card-head">Kangaroo Valley Safari</h2>-->
      <!--</app-simple-card-head>-->
      <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
      <a href="#/" class="card-action-button">SHARE</a>
      <a href="#/" class="card-action-button">EXPLORE</a>
    </app-simple-card-final>
  `
})
export class DemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
