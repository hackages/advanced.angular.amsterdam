import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface ProviderMap {
  [key: string]: BehaviorSubject<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  providers: ProviderMap = {};

  setProvider(key: string, data: any) {
    if (!this.providers[key]) {
      this.providers[key] = new BehaviorSubject(data);
    } else {
      this.providers[key].next(data);
    }
  }
}
