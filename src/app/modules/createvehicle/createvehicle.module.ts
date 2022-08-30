import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatevehicleRoutingModule } from './createvehicle-routing.module';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    CreatevehicleRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreatevehicleModule { }
