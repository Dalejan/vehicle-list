/**
 * filter.component
 * Componente encargado renderizar los filtros en distintas pantallas
 */
import { Component, OnInit, Input } from "@angular/core";
import { VehicleService } from "../../services/vehicle.service";
import { Vehicle } from "src/classes/vehicle";
import { Observable } from "rxjs";

import { SaveFiltersAction } from "../../../ngrx/filter/filter.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { Filter } from "src/classes/filter";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  /**
   * Variable que se encarga de renderizar dos tipos de filtro (en home y en listado de vehículos)
   */
  @Input("isFirstQuery") public isFirstQuery = true;

  /**
   * Variable que contiene las marcas de la db
   */
  @Input("brands") public brands = ["BMW", "Chevrolet", "Susuki"];

  /**
   * Variable que contiene los modelos de la db
   */
  @Input("models") public models = ["2000", "1999", "1505"];

  /**
   *  Variable que contiene los colores de la db
   */
  @Input("colors") public colors = ["rojo", "café", "amarillo"];

  /**
   *  Variable que contiene los tamaños de la db
   */
  @Input("sizes") public sizes = ["Normal", "Mediano", "Grande"];

  /**
   * Variable para mostrar más o menos filtros en mobile
   */
  private showMoreFilters = true;

  /**
   * Variables que maneja los filtros seleccionados
   */
  private selectedTypes = [
    { type: "car", isSelected: false },
    { type: "moto", isSelected: false },
    { type: "truck", isSelected: false }
  ];
  private selectedBrand = "";
  private selectedModel = "";
  private selectedColor = "";
  private selectedSize = "";

  public $vehicles: Observable<Vehicle[]>;
  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      if (state.filters) {
        this.selectedTypes = state.filters.ftype;
        this.selectedBrand = state.filters.brand;
        this.selectedModel = state.filters.model;
        this.selectedColor = state.filters.color;
        this.selectedSize = state.filters.size;
      }
    });
  }

  ngOnInit() {}

  toggleShowMoreFilters() {
    this.showMoreFilters = !this.showMoreFilters;
  }
  search() {
    const action = new SaveFiltersAction(
      new Filter(
        this.selectedTypes,
        this.selectedModel,
        this.selectedBrand,
        this.selectedColor,
        this.selectedSize
      )
    );
    this.store.dispatch(action);
  }
}
