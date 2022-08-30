import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListHeaderComponent } from './vehicle-list-header.component';

describe('VehicleListHeaderComponent', () => {
  let component: VehicleListHeaderComponent;
  let fixture: ComponentFixture<VehicleListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
