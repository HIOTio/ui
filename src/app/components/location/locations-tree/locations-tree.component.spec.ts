import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTreeComponent } from './locations-tree.component';

describe('LocationsTreeComponent', () => {
  let component: LocationsTreeComponent;
  let fixture: ComponentFixture<LocationsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
