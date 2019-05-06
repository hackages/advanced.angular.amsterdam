import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FacebookService} from './facebook.service';
import {ApiServiceModule} from './api-service.module';

@Injectable({
  providedIn: ApiServiceModule,
  useClass: FacebookService,
  // useClass: FacebookSafeService,
  deps: [HttpClient]
})
export abstract class AbstractFacebookService {

  abstract pictures(): string[];
}
