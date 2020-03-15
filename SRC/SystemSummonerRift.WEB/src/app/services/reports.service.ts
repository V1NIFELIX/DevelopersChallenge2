import { HttpClient } from '../components/core/http.client';
import { Injectable } from '@angular/core';
//mport { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment.local';
import { Observable, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient){
  }

  public get(){
    return new Promise((resolve,reject) => {
      this.http.get('https://localhost:44357/api/transactions/list').subscribe(result => {
        resolve(result);
      }, err => reject(err));
    })
  }

  public getWithParams(seletor){
    return new Promise((resolve,reject) => {
      this.http.getWithParams('https://localhost:44357/api/transactions/list', seletor).subscribe(result => {
        resolve(result);
      }, err => reject(err));
    })
  }

}
