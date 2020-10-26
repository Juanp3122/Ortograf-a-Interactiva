import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActividadAudioPage } from './actividad-audio.page';

describe('ActividadAudioPage', () => {
  let component: ActividadAudioPage;
  let fixture: ComponentFixture<ActividadAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
