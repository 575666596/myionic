import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabelPage } from './label.page';

describe('LabelPage', () => {
  let component: LabelPage;
  let fixture: ComponentFixture<LabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
