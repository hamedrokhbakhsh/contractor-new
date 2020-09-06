import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailReceptionPage } from './detail-reception.page';

describe('DetailReceptionPage', () => {
  let component: DetailReceptionPage;
  let fixture: ComponentFixture<DetailReceptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReceptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailReceptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
