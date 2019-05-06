import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appClassSetter]'
})
export class ClassSetterDirective {
  @HostBinding('class.details') details = true;

  constructor() {
  }

}
