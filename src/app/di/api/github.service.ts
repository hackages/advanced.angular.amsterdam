import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getUsers(): string[] {
    return ['user1', 'user2'];
  }
}
