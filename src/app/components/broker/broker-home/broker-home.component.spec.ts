import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerHomeComponent } from './broker-home.component';

describe('BrokerHomeComponent', () => {
  let component: BrokerHomeComponent;
  let fixture: ComponentFixture<BrokerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
