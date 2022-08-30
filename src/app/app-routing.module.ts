import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path:'auth', //Tdo localhost:4200/
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path:'', //Tdo localhost:4200/
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate:[SessionGuard] //Guardianes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
