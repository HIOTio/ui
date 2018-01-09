import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../../core/user/auth-guard.service';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentService } from './deployment.service';
import { DeploymentHomeCardComponent } from './deployment-home-card/deployment-home-card.component';
import { ProfileService } from '../../core/user/profile.service';
import { DeviceModule } from '../device/device.module';
import { LocationModule } from '../location/location.module';
import { DeploymentDetailsComponent } from './deployment-details/deployment-details.component';
import { DeploymentCreateComponent } from './deployment-create/deployment-create.component';
import { DeploymentEditComponent } from './deployment-edit/deployment-edit.component';
import { AddComponent } from './users/add/add.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DeploymentTableViewComponent } from './deployment-table-view/deployment-table-view.component';
import { DeploymentSettingsComponent } from './settings/deployment-settings/deployment-settings.component';
import { DeploymentStatsComponent } from './deployment-stats/deployment-stats.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeploymentSummaryComponent } from './deployment-summary/deployment-summary.component';
import { SelectRolesComponent } from './users/select-roles/select-roles.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DeviceModule,
    LocationModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'deployment', component: DeploymentListComponent, data: { state: 'deployment' }, canActivate: [AuthGuardService] },
      { path: 'deployment/create', component: DeploymentCreateComponent, data: { state: 'deployment' }, canActivate: [AuthGuardService] },
      { path: 'deployment/:id', component: DeploymentDetailsComponent, data: { state: 'deployment' }, canActivate: [AuthGuardService] }
    ]
    )
  ],
  providers: [DeploymentService, ProfileService],
  declarations: [
    DeploymentListComponent,
    DeploymentHomeCardComponent,
    DeploymentDetailsComponent,
    DeploymentCreateComponent,
    DeploymentEditComponent,
    AddComponent,
    UsersListComponent,
    DeploymentTableViewComponent,
    DeploymentSettingsComponent,
    DeploymentStatsComponent,
    RealTimeComponent,
    DeploymentSummaryComponent,
    SelectRolesComponent],
  exports: [DeploymentHomeCardComponent]
})
export class DeploymentModule {
  myDeployments: Observable<any>;
  constructor(
  ) { }

}
