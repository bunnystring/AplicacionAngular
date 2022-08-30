import { Component, OnInit } from '@angular/core';
import { vehicleModel } from '@core/models/vehicle.model';
import { VehiclesService } from '@modules/vehicles/services/vehicles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})
export class VehiclesPageComponent implements OnInit {
  dataVehiclesTrending: Array<vehicleModel> = []

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
   this.loadDataAll()
  }
  async loadDataAll(): Promise<any> {
    this.dataVehiclesTrending = await this.vehiclesService.getAllVehicles$().toPromise()
 
    
   }
}
