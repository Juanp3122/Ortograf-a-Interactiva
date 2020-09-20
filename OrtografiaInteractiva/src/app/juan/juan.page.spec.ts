import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuanPage } from './juan.page';

describe('JuanPage', () => {
  let component: JuanPage;
  let fixture: ComponentFixture<JuanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
