import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XrpComponent } from './xrp.component';

describe('XrpComponent', () => {
  let component: XrpComponent;
  let fixture: ComponentFixture<XrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
