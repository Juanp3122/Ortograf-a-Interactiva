import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeoriaPage } from './teoria.page';

describe('TeoriaPage', () => {
  let component: TeoriaPage;
  let fixture: ComponentFixture<TeoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
