import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoAcentoPage } from './tipo-acento.page';

describe('TipoAcentoPage', () => {
  let component: TipoAcentoPage;
  let fixture: ComponentFixture<TipoAcentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAcentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoAcentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
