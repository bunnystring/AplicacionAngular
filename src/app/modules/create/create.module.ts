import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { CreatePageComponent } from './pages/create-page/create-page.component';


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateModule { }
