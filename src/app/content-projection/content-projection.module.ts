import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DemoComponent} from './demo.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SimpleCardFinalComponent} from './simple-card/simple-card.final.component';
import {SimpleCardComponent} from './simple-card/simple-card.component';

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
    SimpleCardComponent,
    SimpleCardFinalComponent,
  ]
})
export class ContentProjectionModule {
}
