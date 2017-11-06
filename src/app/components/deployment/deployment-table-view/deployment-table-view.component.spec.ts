import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentTableViewComponent } from './deployment-table-view.component';

describe('DeploymentTableViewComponent', () => {
  let component: DeploymentTableViewComponent;
  let fixture: ComponentFixture<DeploymentTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
