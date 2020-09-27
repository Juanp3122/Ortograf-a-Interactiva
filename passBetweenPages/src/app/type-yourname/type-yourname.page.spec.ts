import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeYournamePage } from './type-yourname.page';

describe('TypeYournamePage', () => {
  let component: TypeYournamePage;
  let fixture: ComponentFixture<TypeYournamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeYournamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeYournamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
