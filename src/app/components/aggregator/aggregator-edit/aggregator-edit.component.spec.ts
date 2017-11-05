import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorEditComponent } from './aggregator-edit.component';

describe('AggregatorEditComponent', () => {
  let component: AggregatorEditComponent;
  let fixture: ComponentFixture<AggregatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
