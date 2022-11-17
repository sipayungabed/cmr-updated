import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AccessTokenService } from '../access-token/access-token.service';
import { mergeMap, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {

  constructor(private AccessTokenService : AccessTokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {;
  //   if(!localStorage.getItem('accessToken'))
  //   {
  //     this.AccessTokenService.getAccessToken();
  //   }
  //   const authReq = req.clone({
  //     headers: new HttpHeaders({
  //     'Content-Type' : 'application/json',
  //     // 'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`,
  //     })
  //   });
   
  //  console.log('authReq', authReq);
  //  return next.handle(authReq);


    //
    //////////////////////////////////////////////////
    // Mr. Anton's Code:
    //////////////////////////////////////////////////
    // return this.AccessTokenService.getAccessToken().pipe(take(1), mergeMap(accessToken => {
          // console.log('accessToken in intercept', accessToken)
            const authReq = req.clone({
              headers: new HttpHeaders({
                'Content-Type'  : 'application/json',
                // 'Authorization' : `Bearer ${accessToken}`,
              })
            });
            console.log(authReq);
            return next.handle(authReq);
          }
      // ))
  // }
}
