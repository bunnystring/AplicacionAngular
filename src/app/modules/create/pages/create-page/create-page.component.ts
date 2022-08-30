import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from '@modules/create/services/create.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  errorCreate:boolean = false
  successCreate:boolean = false
  formRegister:FormGroup = new FormGroup({});
  constructor(private createService: CreateService,private router:Router) {
   }

  ngOnInit(): void {
    this.formRegister = new FormGroup(
      {
        name: new FormControl('',[ 
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(12)
        ]),
        rol: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7)
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]),
        condition: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7)
        ]),
        abilities: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        abilities2: new FormControl('', [
          Validators.minLength(4)
        ]),
        abilities3: new FormControl('', [
          Validators.minLength(4)
        ]),
        vehiclesId: new FormControl('', [
          Validators.minLength(4)
        ]),
        mediaId: new FormControl('', [
          Validators.minLength(4)
        ]),
      }
    )
  }
  sendHero(): void {
    const {name, rol, city, condition, abilities, abilities2, abilities3, vehiclesId, mediaId} = this.formRegister.value
    this.createService.sendCredentialsHero(name, rol, city, condition, abilities, abilities2, abilities3, vehiclesId, mediaId)
    .subscribe(responseOk => {//TODO cuando el usuario ingresa credenciales correctas status:200<400
      const {data} = responseOk
      this.successCreate = true
  
    },
    err => {//errores 400>
      this.errorCreate = true
      console.log('Ocurrio error creando un mutante')
    })
  }

}


