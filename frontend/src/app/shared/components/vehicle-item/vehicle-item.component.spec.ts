/**
 * app.component.spec
 * Pruebas unitarias para el vehicle-item component
 */

// *Importación de los módulos y componentes necesarios para realizar las pruebas
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

// componentes
import { VehicleItemComponent } from "./vehicle-item.component";

// módulos
import {
  intersectionObserverPreset,
  LazyLoadImageModule
} from "ng-lazyload-image";
import { RouterTestingModule } from "@angular/router/testing";

// *Pruebas
describe("VehicleItemComponent", () => {
  let component: VehicleItemComponent;
  let fixture: ComponentFixture<VehicleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleItemComponent],
      imports: [
        RouterTestingModule,
        LazyLoadImageModule.forRoot({
          preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
        })
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
