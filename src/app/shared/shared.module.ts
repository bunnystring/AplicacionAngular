import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { VehicleListHeaderComponent } from './components/vehicle-list-header/vehicle-list-header.component';
import { HeroListBodyComponent } from './components/hero-list-body/hero-list-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { VehiclesListBodyComponent } from './components/vehicles-list-body/vehicles-list-body.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    VehicleListHeaderComponent,
    HeroListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    VehiclesListBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    VehicleListHeaderComponent,
    HeroListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    VehiclesListBodyComponent
  ]
})
export class SharedModule { }
