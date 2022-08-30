import { Component, Input, OnInit } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title:string = ''
  @Input() mode:'small' | 'big' = 'big'  
  @Input() dataMutans: Array<MutansModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
