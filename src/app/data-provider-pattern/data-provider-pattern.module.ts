import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DataConsumerComponent} from './data-consumer.component';
import {DataProviderComponent} from './data-provider.component';

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
    DataConsumerComponent,
    DataProviderComponent,
  ]
})
export class DataProviderPatternModule {
}
