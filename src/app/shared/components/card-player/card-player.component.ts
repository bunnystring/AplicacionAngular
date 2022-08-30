import { Component, Input, OnInit } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() mutants: MutansModel = {_id:0, name:'',url:'', city:'', cover: '', condition: '', imagen:'', abilities: '', abilities2:'', abilities3:'', vehiculo:''};
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }
  sendPlay(mutanst:MutansModel): void {
    this.multimediaService.callback.emit(mutanst)
  }
}
