import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SilabaPage } from './silaba.page';

describe('SilabaPage', () => {
  let component: SilabaPage;
  let fixture: ComponentFixture<SilabaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilabaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SilabaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
