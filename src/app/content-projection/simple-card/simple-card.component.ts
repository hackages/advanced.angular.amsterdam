import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-card',
  template: `
    <div class="card">
      <img src="https://s13.postimg.cc/5al19x0d3/media_img.jpg" class="card-media"/>
      <div class="card-details">
        <h2 class="card-head">Kangaroo Valley Safari</h2>
        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
        <a href="#/" class="card-action-button">SHARE</a>
        <a href="#/" class="card-action-button">EXPLORE</a>
      </div>
    </div>
  `,
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

