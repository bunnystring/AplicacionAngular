import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { HeroListBodyComponent } from './hero-list-body.component';

describe('HeroListBodyComponent', () => {
  let component: HeroListBodyComponent;
  let fixture: ComponentFixture<HeroListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HeroListBodyComponent,
        OrderListPipe
      ]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(HeroListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
