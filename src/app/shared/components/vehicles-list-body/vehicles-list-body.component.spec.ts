import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListBodyComponent } from './vehicles-list-body.component';

describe('VehiclesListBodyComponent', () => {
  let component: VehiclesListBodyComponent;
  let fixture: ComponentFixture<VehiclesListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesListBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
