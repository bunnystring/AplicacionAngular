import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MutantsPageComponent } from './mutants-page.component';

describe('MutantsPageComponent', () => {
  let component: MutantsPageComponent;
  let fixture: ComponentFixture<MutantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MutantsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
