import { Component, OnInit } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$:Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event: string):void{
    //Todo: temrino y solo se ejecuta cuando tiene 3 caracteres
    // console.log('🤣Estoy en el padre hahah', event);
    this.listResults$ = this.searchService.searchMutants$(event)
    
  }

}
