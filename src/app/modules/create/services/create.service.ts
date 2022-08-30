import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie:CookieService) { }
  sendCredentialsHero(name:string, rol:string,city:string,condition:string,abilities:any,abilities2:any, abilities3:any, vehiclesId:any, mediaId:any): Observable<any> {
    const body = {
      name,
      rol,
      city,
      condition,
      abilities,
      abilities2,
      abilities3,
      vehiclesId,
      mediaId
    }
    console.log(body)
    return  this.http.post(`${this.URL}mutants`,body)
    .pipe(
      tap((responseOk:any) => {
        const {data} = responseOk
        const {token} = data
        this.cookie.set('token_service', token, 4, '/')
      })
     )
}
}