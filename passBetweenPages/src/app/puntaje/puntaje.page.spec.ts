import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntajePage } from './puntaje.page';

describe('PuntajePage', () => {
  let component: PuntajePage;
  let fixture: ComponentFixture<PuntajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
