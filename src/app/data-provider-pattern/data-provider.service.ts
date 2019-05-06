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
}
