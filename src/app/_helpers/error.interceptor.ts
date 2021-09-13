import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,private _noti:ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
          tap((data: any) => {
              if (data.body && data.body.code == 400) {
                this._noti.clear()
                  this._noti.error(data.body.message,"Error",{
                    timeOut: 2000,
                  });
                  return Observable.throw(data.body.message);
              } else {
                  return data.body;
              }
          }),
          catchError(err => {
            if (err.error?.data != null && err.error?.data != undefined) {
              if (typeof err.error.data == 'object') {
                var errr = '';
                  Object.keys(err.error.data).forEach(key => {
                      if (typeof err.error.data[key] == 'object') {
                          Object.keys(err.error.data[key]).forEach(key2 => {
                            this._noti.clear()
                            errr = err.error.data[key][key2];
                          })
                      }
                  });
                  if(errr != ''){
                    this._noti.error(errr,"Error",{
                      timeOut: 2000,
                    });
                  }
              }
          }else {
            var error = err.error?.error_description || err.error?.message || err.statusText || err?.message;
            this._noti.clear()
            this._noti.error(error,'Error',{
              timeOut: 2000,
            })
        }
              if (err.status === 401) {
                this._noti.clear()
                 this._noti.error("Not authorized","Error",{
                  timeOut: 2000,
                });
                  sessionStorage.removeItem(environment.storageKey);
                  this.router.navigate(['/login']);
              }
              var error = err.error?.error_description || err.error?.message || err.statusText || err?.message;
              return throwError(error);
          }));
  }
}
