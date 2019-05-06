import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AbstractFacebookService} from './facebook.abstract.service';

@Injectable()
export class FacebookService implements AbstractFacebookService {
  constructor(private http: HttpClient) {
  }

  pictures(): string[] {
    return ['picture 1', 'picture 2'];
  }
}
