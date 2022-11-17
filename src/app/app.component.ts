import { Component, OnInit, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { interval, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { title } from 'process';
import { AccessTokenService } from './shared/service/access-token/access-token.service';
import { SharedService } from './shared/service/api-shared/shared.service';
import { SHELLAPP_HOST } from './data-api/host.api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = interval(300000); // 300000 ms = 5 menit
  title : string;
  expiry;

  parentUrl = SHELLAPP_HOST;
  isActive : boolean;
  finishLoading = 
  {  
     messageType : "finishLoading"
  }
  pingMessage = 
  {  
    messageType : "pingMessage"
  }


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private AccessTokenService : AccessTokenService,
    private SharedService : SharedService){}

  ngOnInit()
  {
    this.setTitle();
    if(window.location != window.parent.location && window.location.ancestorOrigins[0] == this.parentUrl)
    {
      window.parent.postMessage(JSON.stringify(this.finishLoading), this.parentUrl);
      console.log("iFrame");
      this.setCounter();
      
    }
    else
    { 
      // this.router.navigate(["forbidden"]);
      console.log("not iFrame");
    }
    console.log("app-component.ts selesai")
  }

  setCounter()
  {
    this.counter.subscribe((count) =>
    {
      if (this.isActive) 
      {         
        window.parent.postMessage(JSON.stringify(this.pingMessage), this.parentUrl);         
        this.isActive = false;       
      }
    })
  }

  setTitle()
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd), 
      map(() => this.route),
      map(route => 
      {
        while (route.firstChild) 
        {
          if(route.firstChild.snapshot.data.title)
          {
            route = route.firstChild;
            return route
          }
        }
      }),
      filter(route => route.outlet === 'primary'), 
      mergeMap(route => route.data)).subscribe(data => 
      {
        this.title = data.title;
      })
  }

  clearToken()
  {
    this.AccessTokenService.accessToken$.next(null)
    localStorage.removeItem('accessToken');
    console.log('clear Token', localStorage.getItem('accessToken') )
  }

  getDataFromDummyServer()
  {
    this.SharedService.getData(SHELLAPP_HOST + '/magenta-dummy-resource/sample').subscribe((response) => 
    {
      console.log(response);
    })
  }
  
   //Parent Message Listener
   @HostListener('window:message', ['$event']) onPostMessage(event)
   {
     if(event.origin === this.parentUrl)
     {
        var data = JSON.parse(event.data)
        console.log("message", data)
        switch(data.messageType)
        {
          case "saveToken":
            console.log("save TOKEN")
            this.expiry = interval(Math.abs(data.expiry) * 1000).pipe(take(1));
        
            this.expiry.subscribe(counter =>
            {
              console.log("EXPIRED", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
              this.AccessTokenService.accessToken$.next(null)
              localStorage.removeItem('userInfo');
              localStorage.removeItem('accessToken');
            });
  
            console.log("Insert Data", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
            this.AccessTokenService.accessToken$.next(data.accessToken.toString())
            localStorage.setItem('accessToken', data.accessToken.toString());
            localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
            break;
          
          case "deleteToken":
            console.log("deleteToken", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
            this.AccessTokenService.accessToken$.next(null)
            localStorage.removeItem('accessToken');
            break;
        }
     }
   }

   //Keyboard Listener
  @HostListener('document:keypress', ['$event']) handleKeyboardEvent(event: KeyboardEvent)
  {
    this.isActive = true;
  }

  //Mouse Listener
  @HostListener('document:mousedown', ['$event']) handleMouseEvent(event: MouseEvent) 
  {
    this.isActive = true;
  }


}
