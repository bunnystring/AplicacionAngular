import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MutansModel } from '@core/models/mutanst.model';


@Component({
  selector: 'app-hero-list-body',
  templateUrl: './hero-list-body.component.html',
  styleUrls: ['./hero-list-body.component.css']
})
export class HeroListBodyComponent implements OnInit {
  @Input() mutants: MutansModel[] = []
  constructor( private router:Router) { }

  ngOnInit(): void {
  
  }
  updateMutant(id:any,name:string,city:string){
    this.router.navigate([`updatemutant/${id}/${name}/${city}`]);

  }
}
