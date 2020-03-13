import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {
  constructor(private loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    },
      (err: any) => {
        console.log(err);
        this.onEnd();
    }));
  }

  private onEnd(): void {
    // console.log('onEnd')
    this.hideLoader();
  }
  private showLoader(): void {
    // console.log('showLoader')
    this.loadingService.show();
  }
  private hideLoader(): void {
    this.loadingService.hide();
  }
}
