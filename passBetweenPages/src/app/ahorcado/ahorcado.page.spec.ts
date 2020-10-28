import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhorcadoPage } from './ahorcado.page';

describe('AhorcadoPage', () => {
  let component: AhorcadoPage;
  let fixture: ComponentFixture<AhorcadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhorcadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
