import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ApiServiceModule} from './api/api-service.module';

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
    ]),
    ApiServiceModule
  ],
  declarations: [DemoComponent]
})
export class DiModule {
}
