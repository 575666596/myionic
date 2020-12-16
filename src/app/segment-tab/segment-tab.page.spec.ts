import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentTabPage } from './segment-tab.page';

describe('SegmentTabPage', () => {
  let component: SegmentTabPage;
  let fixture: ComponentFixture<SegmentTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
