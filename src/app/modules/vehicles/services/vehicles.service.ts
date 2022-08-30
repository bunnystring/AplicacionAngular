import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, observable, Observable, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }
  getAllVehicles$():Observable<any>{
    return this.httpClient.get(`${this.URL}/vehicles/`)
    .pipe(
      map(({data}: any) => {  
        return data
      })
    )
  }
}
