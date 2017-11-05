import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorHomeComponent } from './aggregator-home.component';

describe('AggregatorHomeComponent', () => {
  let component: AggregatorHomeComponent;
  let fixture: ComponentFixture<AggregatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
