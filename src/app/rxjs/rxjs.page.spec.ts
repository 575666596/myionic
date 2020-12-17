import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RxjsPage } from './rxjs.page';

describe('RxjsPage', () => {
  let component: RxjsPage;
  let fixture: ComponentFixture<RxjsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
