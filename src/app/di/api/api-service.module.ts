import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SLACK_API_TOKEN} from './slack.api.token';
import {SLACK_API_SERVICE_TOKEN} from './slack.api.service.token';
import {SlackService} from './slack.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    // Refactor service using the new Treeshakable Providers API
    // GithubService,
    // {
    //   provide: AbstractFacebookService,
    //   useClass: FacebookService // FacebookSafeService
    // },
    // {
    //   provide: SLACK_API_TOKEN,
    //   useValue: 'slackToken',
    // },
    // {
    //   provide: SLACK_API_SERVICE_TOKEN,
    //   useFactory: function (http, token) {
    //     return new SlackService(http, token);
    //   },
    //   deps: [HttpClient, SLACK_API_TOKEN]
    // }
  ],
}) // we need to put the service in their own module
   // to avoid circular dependency issue
export class ApiServiceModule {
}
