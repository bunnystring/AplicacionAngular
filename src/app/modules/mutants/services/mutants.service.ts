import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';
import { map, observable, Observable, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MutantsService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { 
   
  }
  /**Devolver todos los mutantes */
  /**
   * //TODO [data:[..1,..2]]
   * @returns 
   */
  // private skipById(listMutants:MutansModel[], id:string):Promise<MutansModel[]> {
  //   return new Promise((resolve, reject) =>{
  //     const listTmp = listMutants.filter(a => a._id != id)
  //     resolve(listMutants)
  //   })
  // }
  getAllMutanst$():Observable<any>{
    return this.httpClient.get(`${this.URL}/mutants`)
    .pipe(
      map(({data}: any) => {  
        return data
      })
    )
  }
  /**
   * Devolver Heroes
   */
  getAllRamdon$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/mutants`)
    .pipe(
      map(({data}: any) => {
        return data.reverse()
      }),
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Algo paso', [status, statusText]);

        return of([])
      })
    )
  }
}
