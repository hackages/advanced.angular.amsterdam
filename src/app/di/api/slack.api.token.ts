import {InjectionToken} from '@angular/core';
import {ApiServiceModule} from './api-service.module';

export const SLACK_API_TOKEN = new InjectionToken<string>('SLACK_API_TOKEN',
  {
    providedIn: ApiServiceModule,
    factory: () => 'SLACK_API_TOKEN'
  }
);

