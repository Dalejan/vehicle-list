/**
 * vehicle-item.component
 * Componente que maneja la información y eventos de cada vehículo
 */
import { Component, OnInit, Input } from "@angular/core";
import { Vehicle } from "src/classes/vehicle";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-item",
  templateUrl: "./vehicle-item.component.html",
  styleUrls: ["./vehicle-item.component.scss"]
})
export class VehicleItemComponent implements OnInit {
  /**
   * name: vehicle
   * Type: Vehicle
   * Variable que maneja la información de cada vehículo
   */
  @Input("vehicle") vehicle: Vehicle;

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate([`/detail/${this.vehicle.id}`]));
  }
}
