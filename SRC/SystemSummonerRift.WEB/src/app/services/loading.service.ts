import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface LoadingState {
  count: number;
  }

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loaderSubject = new Subject<LoadingState>();
  loaderState = this.loaderSubject.asObservable();

  count: number = 0;
  constructor() { }
  show() {

    this.count++;
    // console.log('ADD', this.count)
    // console.log('SERVICE SHOW');
    this.loaderSubject.next(<LoadingState>{ count: this.count });
  }
  hide() {
    // console.log('SERVICE HIDE');
    this.count--;
    // console.log('REMOVE', this.count)
    this.loaderSubject.next(<LoadingState>{ count: this.count });
  }
}
