import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
      RouterTestingModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODOD: Primer prueba
  //debe asegurarse que el formulario sea invalido cuando ingrese datos erroneos

  // Patron AAA
 
  it('should create ❤️❤️❤️', () => {

 //Arrange
const mockCredentials = {
  email:'0x0x0x0x',
  password:'122222222222222222222222222'
}
const emailForm:any = component.formLogin.get('email')
const passwordForm:any = component.formLogin.get('password')
  //Act
  emailForm.setValue(mockCredentials.email)
  passwordForm.setValue(mockCredentials.password)
  //Assert
    expect(component.formLogin.invalid).toEqual(true); //true o false
  });

  it('should return valid the form ❤️❤️❤️', () => {

    //Arrange
   const mockCredentials = {
     email:'lp@gmail.com',
     password:'1234'
   }
   const emailForm:any = component.formLogin.get('email')
   const passwordForm:any = component.formLogin.get('password')
     //Act
     emailForm.setValue(mockCredentials.email)
     passwordForm.setValue(mockCredentials.password)
     //Assert
       expect(component.formLogin.invalid).toEqual(false); //true o false
     });
     it('El boton deberia d etener la palabra "Iniciar Sesion', () => { 
      const elementRef = fixture.debugElement.query(By.css('.form-action button')) //query es document.queryselector()
      const getInnerText = elementRef.nativeElement.innerText 
      expect(getInnerText).toEqual('Iniciar sesión')
     })
});
