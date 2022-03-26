import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChoferComponent } from './info-chofer.component';

describe('InfoChoferComponent', () => {
  let component: InfoChoferComponent;
  let fixture: ComponentFixture<InfoChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
