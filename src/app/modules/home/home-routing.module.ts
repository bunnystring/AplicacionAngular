import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'main',
    loadChildren:() => import('@modules/main/main.module').then(m => m.MainModule)
  },
  {
    path:'mutants',
    loadChildren:() => import('@modules/mutants/mutants.module').then(m => m.MutantsModule)
  },
  {
    path:'vehicles',
    loadChildren:() => import('@modules/vehicles/vehicles.module').then(m => m.VehiclesModule)
  }
  ,
  {
    path:'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path:'create',
    loadChildren:() => import('@modules/create/create.module').then(m => m.CreateModule)
  },
  {
    path:'createvehicle',
    loadChildren:() => import('@modules/createvehicle/createvehicle.module').then(m => m.CreatevehicleModule)
  },
  {
    path:'updatemutant/:id/:name/:city',
    loadChildren:() => import('@modules/update-mutante/update-mutante.module').then(m => m.UpdateMutanteModule)
  },
  {
    path:'**', //404 Cuando no existe la ruta
    redirectTo: '/mutants'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
