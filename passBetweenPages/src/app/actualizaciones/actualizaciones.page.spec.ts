import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizacionesPage } from './actualizaciones.page';

describe('ActualizacionesPage', () => {
  let component: ActualizacionesPage;
  let fixture: ComponentFixture<ActualizacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
