/**
 * vehicle.service.spec
 * Pruebas unitarias para el servicio de vehículos
 */

// *Importación de los módulos y componentes necesarios para realizar las pruebas
import { TestBed } from "@angular/core/testing";

// componentes
import { VehicleService } from "./vehicle.service";

// módulos
import { HttpClientTestingModule } from "@angular/common/http/testing";

// *Pruebas
describe("VehicleService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it("should be created", () => {
    const service: VehicleService = TestBed.get(VehicleService);
    expect(service).toBeTruthy();
  });
});
