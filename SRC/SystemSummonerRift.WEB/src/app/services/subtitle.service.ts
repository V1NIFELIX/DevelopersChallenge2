import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface Subtitle {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class SubtitleService {
  private titleSubject = new Subject<Subtitle>();
  title = this.titleSubject.asObservable();
  constructor() { }
  setTitle(text: any) {
    // console.log('SERVICE SHOW');
    this.titleSubject.next(<Subtitle>{ name: text });
  }
}
