import { HttpClient } from '../components/core/http.client';
import { Injectable } from '@angular/core';
//mport { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment.local';
import { Observable, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImportReportsService {

  constructor(private http: HttpClient){
  }

  public Get(seletor : Object = null){
    return new Promise((resolve,reject) => {
      this.http.post(environment.ApiUrl +`/api/transactions/list`, seletor).subscribe(result => {
        resolve(result);
      }, err => reject(err));
    })
  }

}
