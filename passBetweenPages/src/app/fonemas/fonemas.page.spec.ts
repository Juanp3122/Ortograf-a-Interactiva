import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FonemasPage } from './fonemas.page';

describe('FonemasPage', () => {
  let component: FonemasPage;
  let fixture: ComponentFixture<FonemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FonemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
