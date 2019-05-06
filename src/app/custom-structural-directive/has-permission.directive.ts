import {Directive, Input} from '@angular/core';
import {UserService} from './user.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {
  constructor(
    private userService: UserService
  ) {
  }

  @Input()
  set appHasPermission(val) {
    if (this.userService.checkPermission(val)) {
    } else {
    }
  }
}
