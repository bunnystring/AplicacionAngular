import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatevehiclesService } from '@modules/createvehicle/services/createvehicles.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  errorCreate: boolean = false
  successCreate: boolean = false
  formRegisterV:FormGroup = new FormGroup({});
  constructor(private createServiceV: CreatevehiclesService, private router:Router) { }

  ngOnInit(): void {
    this.formRegisterV = new FormGroup(
      {
        name: new FormControl('',[ 
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ]),
        type: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      }
    )
  }
  sendVehicle(): void {
    const {name, type} = this.formRegisterV.value
    this.createServiceV.sendCredentialsVehicle(name, type)
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


