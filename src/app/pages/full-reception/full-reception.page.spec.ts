import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullReceptionPage } from './full-reception.page';

describe('FullReceptionPage', () => {
  let component: FullReceptionPage;
  let fixture: ComponentFixture<FullReceptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullReceptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullReceptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
