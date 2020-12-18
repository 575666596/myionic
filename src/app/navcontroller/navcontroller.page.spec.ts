import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavcontrollerPage } from './navcontroller.page';

describe('NavcontrollerPage', () => {
  let component: NavcontrollerPage;
  let fixture: ComponentFixture<NavcontrollerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcontrollerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavcontrollerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
