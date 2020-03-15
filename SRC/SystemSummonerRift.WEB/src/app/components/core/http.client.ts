import { Injectable } from '@angular/core';
import { HttpClient as Http, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class HttpClient {

    private endPoint: string;

    private obToken: Observable<HttpHeaders> = new Observable<HttpHeaders>();

    constructor(private http: Http) {

        this.endPoint = environment.ApiUrl;

        this.obToken = new Observable(observer => {
              let headers = new HttpHeaders(
              {'Content-type':'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
              'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
              'Accept': '*/*'  });
              observer.next(headers);
              observer.complete();
          });
    }

    public isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
          console.log(str, e);
            return false;
        }
        return true;
    }

    get EndPoint() {
        return this.endPoint;
    }

    get(url): Observable<any> {
        return new Observable<any>(observer => {
            this.obToken.subscribe(header => {
                this.http.get(url, {
                    headers: header
                }).pipe(
                    catchError((err) => {
                      console.log(err);
                        observer.error(err);
                        throw err;
                    }),
                    map(response => {
                        return response;
                    })
                ).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }

    getReport(url): Observable<any> {

        return new Observable<any>(observer => {

            this.obToken.subscribe(header => {
                this.http.get(url, {
                    headers: header
                }).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }

    getWithParams(url, params): Observable<any> {

        return new Observable<any>(observer => {
            this.obToken.subscribe(header => {
                this.http.get(url, {
                    headers: header,
                    params:  params
                }).pipe(
                    catchError((err) => {
                      observer.error(err);
                        throw err;
                    }),
                    map(response => {
                      if(!this.isJson(response))
                        return response;
                      else
                      throw "Content type is not json";
                    })
                ).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }

    post(url, data, options = {}): Observable<any> {
        return new Observable<any>(observer => {
            this.obToken.subscribe(header => {
                options['headers'] = header;
                this.http.post(this.endPoint + url, data, options).pipe(
                    catchError((err) => {
                        observer.error(err);
                        throw err;
                    }),
                    map(response => {
                        return response;
                    })
                ).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }

    put(url, data): Observable<any> {

        return new Observable<any>(observer => {
            this.obToken.subscribe(header => {
                this.http.put(this.endPoint + url, data, {
                    headers: header
                }).pipe(
                    catchError((err) => {
                        observer.error(err);
                        throw err;
                    }),
                    map(response => {
                        return response;
                    })
                ).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }

    delete(url): Observable<any> {
        return new Observable<any>(observer => {

            this.obToken.subscribe(header => {
                this.http.delete(this.endPoint + url, {
                    headers: header
                }).pipe(
                    catchError((err) => {
                        observer.error(err);
                        throw err;
                    }),
                    map((response:any) => {
                        return response;
                    })
                ).subscribe(response => {
                    observer.next(response);
                    observer.complete();
                });
            });
        });
    }
}
