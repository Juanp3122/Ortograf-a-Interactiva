import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignosPuntuacionPage } from './signos-puntuacion.page';

describe('SignosPuntuacionPage', () => {
  let component: SignosPuntuacionPage;
  let fixture: ComponentFixture<SignosPuntuacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignosPuntuacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignosPuntuacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
