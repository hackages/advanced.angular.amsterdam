import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AbstractFacebookService} from './facebook.abstract.service';

@Injectable()
export class FacebookSafeService implements AbstractFacebookService {
  constructor(private http: HttpClient) {
  }

  pictures(): string[] {
    return ['No picture', 'No Picture'];
  }
}
