import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MayusculasPage } from './mayusculas.page';

describe('MayusculasPage', () => {
  let component: MayusculasPage;
  let fixture: ComponentFixture<MayusculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayusculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MayusculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
