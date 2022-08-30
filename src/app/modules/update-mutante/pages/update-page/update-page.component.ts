import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { updateMutansModel } from '@core/models/updateMutans';
import { UpdateMutanteService } from '@modules/update-mutante/services/update-mutante.service';




@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  inputDisabled:boolean = true;
  dataMutantsTrending!: {_id: any, name: string, city:string};
  errorCreate:boolean = false
  successCreate:boolean = false
  formUpdate:FormGroup = new FormGroup({});
  constructor(private rutaActiva: ActivatedRoute, private updateService: UpdateMutanteService) { }

  ngOnInit(): void {
    this.getAlldata()
    this. validationForm()
  }
   getAlldata(): void {
   this.dataMutantsTrending = {
    _id: this.rutaActiva.snapshot.params['id'],
    name: this.rutaActiva.snapshot.params['name'],
    city: this.rutaActiva.snapshot.params['city']
   }
  }
  validationForm(): void{
    this.formUpdate = new FormGroup(
      {
        _id: new FormControl(this.dataMutantsTrending._id,[ 
        ]),
        name: new FormControl(this.dataMutantsTrending.name,[ 
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(12)
        ]),
        city: new FormControl(this.dataMutantsTrending.city, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ]),
      }
    )
  }
  sendUpdate(): void {
    const {_id, name, city} = this.formUpdate.value
    this.updateService.sendCredentialsUpdate(_id, name, city)
    .subscribe(responseOk => {//TODO cuando el usuario ingresa credenciales correctas status:200<400
      const {data} = responseOk
      this.successCreate = true
  
    },
    err => {//errores 400>
      this.errorCreate = true
      console.log('Ocurrio error creando un vehiculo')
    })
    
    
  
  }
}


