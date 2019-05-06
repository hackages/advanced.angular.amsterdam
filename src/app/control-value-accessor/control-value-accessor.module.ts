import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DatePickerComponent} from './date-picker.component';
import {DatePickerAccessorComponent} from './date-picker-accessor.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
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
    DatePickerComponent,
    DatePickerAccessorComponent
  ]
})
export class ControlValueAccessorModule {
}
