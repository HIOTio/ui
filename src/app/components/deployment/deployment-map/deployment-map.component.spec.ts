import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentMapComponent } from './deployment-map.component';

describe('DeploymentMapComponent', () => {
  let component: DeploymentMapComponent;
  let fixture: ComponentFixture<DeploymentMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
