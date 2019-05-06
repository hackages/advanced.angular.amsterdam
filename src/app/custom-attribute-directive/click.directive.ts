import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  constructor() {
  }

  click($event) {
    console.log('Clicked on', $event);
  }

}
