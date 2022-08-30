import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'login',//Todo http://lcoalhost:4200/auth/login
    component: LoginPageComponent
  },
  {
    path:'**',//Todo http://lcoalhost:4200/auth/
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
