import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsListSelectComponent } from './locations-list-select.component';

describe('LocationsListSelectComponent', () => {
  let component: LocationsListSelectComponent;
  let fixture: ComponentFixture<LocationsListSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsListSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
