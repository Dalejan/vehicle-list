/**
 * filter.component.spec
 * Pruebas unitarias para el filter component
 */

// *Importación de los módulos y componentes necesarios para realizar las pruebas
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

// componentes
import { FilterComponent } from "./filter.component";

// ngrx
import { appReducers } from "src/app/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { filterEffects } from "src/app/ngrx/filter/filter.effects";

// módulos
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";

// *Pruebas
describe("FilterComponent", () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  const initialState = { loggedIn: false };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([filterEffects])
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
