import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    VehiclesPageComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule
  ]
})
export class VehiclesModule { }
