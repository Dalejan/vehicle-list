/**
 * app.reducers
 * Contiene todos los reducers de la app centralizados para 'unirlos'
 */
import { ActionReducerMap } from "@ngrx/store";

import * as fromFilter from "./ngrx/filter/filter.reducer";
import * as fromVehicles from "./ngrx/vehicles/vehicles.reducer";

import { Filter } from "src/classes/filter";
import { Vehicle } from "src/classes/vehicle";

export interface AppState {
  filters: Filter;
  vehicles: { vehicles: Vehicle[]; errors: string };
}

export const appReducers: ActionReducerMap<AppState> = {
  filters: fromFilter.filterReducer,
  vehicles: fromVehicles.vehicleReducer
};
