import { Injectable } from '@angular/core';
import {  Subject, of, Observable } from 'rxjs';
import { SHELLAPP_HOST } from 'src/app/data-api/host.api';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {
  public accessToken$ = new Subject();
  parentUrl = SHELLAPP_HOST;
  tokenNotFound  =
  {  
    messageType: "tokenNotFound" 
  } 
  constructor() { }

  getAccessToken() : Observable<any>
  {
    // var token = localStorage.getItem("accessToken");
    // if(token) 
    // {
    //   console.log('punya token') 
    //   return of(token);
    // } 
    // else 
    // {
      console.log('gk punya token')
      window.parent.postMessage(JSON.stringify(this.tokenNotFound), this.parentUrl);
      console.log('message tokenNotFound sudah terkirim')
      return this.accessToken$.pipe();
    // }
  }
}
