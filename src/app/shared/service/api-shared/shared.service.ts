import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, of, throwError, } from 'rxjs';
import { catchError, map, retryWhen, concatMap, delay } from 'rxjs/operators';
import { ModalAlertComponent } from '../../modal/modal-alert.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private modalService : NgbModal) { }

  getData(url : string, queryparam? : string): Observable<any> 
  {
    // var accessTokenBef = localStorage.getItem('accessToken');
    if(queryparam != null && queryparam != "")
    {
      url = url + queryparam;
    }
    console.log('lewat sini gk??',url)
    return this.http.get(url, {observe : "response"})
    .pipe(map(response => {return new HttpResult(response.status, response.body);}), 
          retryWhen(errors => errors.pipe(
              concatMap((error, count) => {
                console.error('errorrrr in intercept', error)
                  // if (error.status == 401 && !accessTokenBef) {
                  //     accessTokenBef = localStorage.getItem('accessToken');
                  //     return of(error.status);
                  // }
                  // else if(error.status == 401 && accessTokenBef)
                  // {
                  //   console.log('Send Invalid Token')
                  // }
                  return throwError(error);;
              }),
              delay(1000)
          )),
          catchError(this.handleError<any>('getData')),
      );
  }

  getDataImage(url : string, queryparam? : string): Observable<any> 
  {
    var accessTokenBef = localStorage.getItem('accessToken');
    if(queryparam != null && queryparam != "")
    {
      url = url + queryparam;
    }
    return this.http.get(url, {responseType: 'blob'})
    .pipe(map(response => {return response}), 
          retryWhen(errors => errors.pipe(
              concatMap((error, count) => {
                  if (error.status == 401 && !accessTokenBef) {
                      accessTokenBef = localStorage.getItem('accessToken');
                      return of(error.status);
                  }
                  else if(error.status == 401 && accessTokenBef)
                  {
                    console.log('Send Invalid Token')
                  }
                  return throwError(error);;
              }),
              delay(1000)
              )),
            catchError(error => {
              console.log('Caught in CatchError. Returning 0')
              return of(0);
            }),
      );
  }


  postData(url: string, data: any): Observable<any>  
  {
    return this.http.post(url, data, {observe: 'response'})
    .pipe(map(response => {return new HttpResult(response.status, response.body);}), catchError(this.handleError<any>("postData")));
  }

  putData(url: string, data: any): Observable<any>  
  {
    return this.http.put(url, data, { observe : "response"})
    .pipe(map(response => {return new HttpResult(response.status, response.body);}), catchError(this.handleError<any>("putData")));    
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      if(operation == 'getData')
      {
        const alert = this.modalService.open(ModalAlertComponent);
        alert.componentInstance.content = "Error Code " + error.status + " : " + error.statusText;
        alert.result.then((result) => {result == "Ok" ?  '' : null}, () => {});
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


export class HttpResult<T> {
  constructor(public status: number,
              public body: T ) {}
}
