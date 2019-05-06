import {InjectionToken} from '@angular/core';

export interface SlackApiService {
  getMessages(): string[];
}

export const SLACK_API_SERVICE_TOKEN = new InjectionToken<SlackApiService>('SLACK_API_SERVICE_TOKEN');

