import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledTableComponent } from './enrolled-table.component';

describe('EnrolledTableComponent', () => {
  let component: EnrolledTableComponent;
  let fixture: ComponentFixture<EnrolledTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
