import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiServiceModule} from './api-service.module';

@Injectable({
  providedIn: ApiServiceModule
})
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getUsers(): string[] {
    return ['user1', 'user2'];
  }
}
