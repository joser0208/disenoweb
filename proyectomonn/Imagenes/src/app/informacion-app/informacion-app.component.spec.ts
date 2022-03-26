import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAppComponent } from './informacion-app.component';

describe('InformacionAppComponent', () => {
  let component: InformacionAppComponent;
  let fixture: ComponentFixture<InformacionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
