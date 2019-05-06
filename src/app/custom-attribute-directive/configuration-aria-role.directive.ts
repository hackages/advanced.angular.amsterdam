import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appConfigurationAriaRole]'
})
export class ConfigurationAriaRoleDirective {
  // You should name your input
  @HostBinding('attr.role')
  @Input() appConfigurationAriaRole = 'link';

  constructor() {
  }

}
