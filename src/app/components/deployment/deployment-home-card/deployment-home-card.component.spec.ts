import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentHomeCardComponent } from './deployment-home-card.component';

describe('DeploymentHomeCardComponent', () => {
  let component: DeploymentHomeCardComponent;
  let fixture: ComponentFixture<DeploymentHomeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentHomeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
