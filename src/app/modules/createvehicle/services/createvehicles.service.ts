import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, observable, Observable, of, catchError } from 'rxjs';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CreatevehiclesService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient, private cookie:CookieService) { }
  sendCredentialsVehicle(name:string, type:string): Observable<any> {
    const body = {
      name,
      type 
    }
    console.log(body)
    return  this.http.post(`${this.URL}vehicles/`,body)
    .pipe(
      tap((responseOk:any) => {
        const {data} = responseOk
        const {token} = data
        this.cookie.set('token_service', token, 4, '/')
      })
     )
}
}

