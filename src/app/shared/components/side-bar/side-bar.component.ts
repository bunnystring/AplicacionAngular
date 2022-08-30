import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>
  } = {defaultOptions: []}

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/','main']
      },
      {
        name: 'Buscar Mutante',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name:'Mutantes',
        icon: 'uil uil-laughing',
        router: ['/', 'mutants']
        // query: {hola:'mundo'}
      },
      {
        name:'Vehicles',
        icon: 'uil uil-car-sideview',
        router: ['/', 'vehicles']
      },
      {
        name: 'Crear Mutante',
        icon: 'uil uil-plus',
        router: ['/', 'create']
      },
      {
        name: 'Crear Vehiculo',
        icon: 'uil uil-plus',
        router: ['/', 'createvehicle']
      }
    ]
  }
  goTo($event: any):void {
    this.router.navigate(['/', 'mutants'],{
      queryParams:{
        key1: 'value',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
  logOut():void {
    localStorage.removeItem("token");
    // this.router.navigate(['auth'])
  }
}
