import { Component, OnDestroy, OnInit } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';
import { MutantsService } from '@modules/mutants/services/mutants.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mutants-page',
  templateUrl: './mutants-page.component.html',
  styleUrls: ['./mutants-page.component.css']
})
export class MutantsPageComponent implements OnInit, OnDestroy {
  dataMutantsTrending: Array<MutansModel> = []
  mockMutantsList2: Array<MutansModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private mutanstService: MutantsService) { }
  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRamdon()
  }
  async loadDataAll(): Promise<any> {
   this.dataMutantsTrending = await this.mutanstService.getAllMutanst$().toPromise()

   
  }
  loadDataRamdon(): void {
    this.mutanstService.getAllRamdon$()
      .subscribe((response: MutansModel[]) => {
       this.mockMutantsList2 = response
       
     }, err => {
       alert('Error de conexion')
     })
    }
  ngOnDestroy(): void {

  }
}
