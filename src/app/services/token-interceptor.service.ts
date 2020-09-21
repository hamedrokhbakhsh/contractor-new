import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppService} from './app.service';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private service: AppService) {}


  intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>>{
    const token = 'sport' + ' ' + localStorage.getItem('token');
    if (token) {
      req = req.clone({headers: req.headers.set('authorization', token)});
    }
    return next.handle(req).pipe(
        tap(
            res => {
              return res;
            }),
        catchError((error: any) => {
          if (error.status === 401) {
            this.service.logout();
          }
          return throwError(error);
        })
    );
  }

}
