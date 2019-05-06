import {inject, InjectionToken} from '@angular/core';
import {ApiServiceModule} from './api-service.module';
import {SlackService} from './slack.service';
import {HttpClient} from '@angular/common/http';
import {SLACK_API_TOKEN} from './slack.api.token';

export interface SlackApiService {
  getMessages(): string[];
}

export const SLACK_API_SERVICE_TOKEN = new InjectionToken<SlackApiService>('SLACK_API_SERVICE_TOKEN',
  {
    providedIn: ApiServiceModule,
    factory: () => new SlackService(inject(HttpClient), inject(SLACK_API_TOKEN))
  }
);

