import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession:boolean = false
  formLogin:FormGroup = new FormGroup({});
  constructor(private authService: AuthService, private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[ 
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value
    this.authService.sendCredentials(email, password)
    .subscribe(responseOk => {//TODO cuando el usuario ingresa credenciales correctas status:200<400
      const {data} = responseOk
      const {token} = data
      this.cookie.set('token', token, 4, '/')
      this.router.navigate(['/', 'mutants'])
    },
    err => {//errores 400>
      this.errorSession = true
      console.log('Ocurrio error con tu email o password')
    })
  }

}
