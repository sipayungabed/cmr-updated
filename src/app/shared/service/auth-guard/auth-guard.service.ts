import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SHELLAPP_HOST } from 'src/app/data-api/host.api';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  parentUrl = SHELLAPP_HOST;
  constructor(private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 

      // var userInfo = JSON.parse(localStorage.getItem('userInfo'));
      // console.log('AuthGuardService', route, this.router, state);

      // // // Check to see if a user has a valid token
      // if (userInfo && userInfo.userFeatures.some(fitur => fitur.accessLink == route.routeConfig.path) &&
      //      window.location != window.parent.location && window.location.ancestorOrigins[0] == this.parentUrl
      //    ) 
      // {
      //    return true;
      // }

      // this.router.navigate(['/forbidden']);
      return true;
  }
}
