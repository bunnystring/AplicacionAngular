import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutantsPageComponent } from './pages/mutants-page/mutants-page.component';
const routes: Routes = [
  {
    path: '',
    component: MutantsPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutantsRoutingModule { }
