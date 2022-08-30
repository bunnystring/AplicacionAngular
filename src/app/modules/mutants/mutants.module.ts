import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutantsRoutingModule } from './mutants-routing.module';
import { MutantsPageComponent } from './pages/mutants-page/mutants-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MutantsPageComponent,
  ],
  imports: [
    CommonModule,
    MutantsRoutingModule,
    SharedModule
  ]
})
export class MutantsModule { }
