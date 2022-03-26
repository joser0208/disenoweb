import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPasajeroComponent } from './ruta-pasajero.component';

describe('RutaPasajeroComponent', () => {
  let component: RutaPasajeroComponent;
  let fixture: ComponentFixture<RutaPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
