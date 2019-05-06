import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from './user.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {
  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {
  }

  @Input()
  set appHasPermission(val) {
    if (this.userService.checkPermission(val)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
