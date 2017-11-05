import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorAddComponent } from './aggregator-add.component';

describe('AggregatorAddComponent', () => {
  let component: AggregatorAddComponent;
  let fixture: ComponentFixture<AggregatorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
