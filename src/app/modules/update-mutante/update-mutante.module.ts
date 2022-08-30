import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMutanteRoutingModule } from './update-mutante-routing.module';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatePageComponent
  ],
  imports: [
    CommonModule,
    UpdateMutanteRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class UpdateMutanteModule { }
