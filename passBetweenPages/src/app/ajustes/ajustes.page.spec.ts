import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjustesPage } from './ajustes.page';

describe('AjustesPage', () => {
  let component: AjustesPage;
  let fixture: ComponentFixture<AjustesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
