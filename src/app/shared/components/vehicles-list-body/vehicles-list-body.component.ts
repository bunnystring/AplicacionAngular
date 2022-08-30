import { Component, Input, OnInit } from '@angular/core';
import { vehicleModel } from '@core/models/vehicle.model';
import * as dataRaw from '../../../data/vehicles.json'

@Component({
  selector: 'app-vehicles-list-body',
  templateUrl: './vehicles-list-body.component.html',
  styleUrls: ['./vehicles-list-body.component.css']
})
export class VehiclesListBodyComponent implements OnInit {
  @Input() dataVehicles: vehicleModel[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
