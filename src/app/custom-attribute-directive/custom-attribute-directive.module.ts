import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HiddenDirective} from './hidden.directive';
import {ClassSetterDirective} from './class-setter.directive';
import {ClickDirective} from './click.directive';
import {ConfigurationAriaRoleDirective} from './configuration-aria-role.directive';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    DemoComponent,
    HiddenDirective,
    ClassSetterDirective,
    ClickDirective,
    ConfigurationAriaRoleDirective
  ]
})
export class CustomAttributeDirectiveModule {
}
