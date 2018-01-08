import { Component, OnInit, Input } from '@angular/core';
import { DeploymentService } from '../deployment.service';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../../core/user/profile.service';
@Component({
  selector: 'app-deployment-create',
  templateUrl: './deployment-create.component.html',
  styleUrls: ['./deployment-create.component.css']
})
export class DeploymentCreateComponent implements OnInit {
  deployment = {
    name: '',
    description: '',
    type: {},
    owner: ''
  };
  constructor(private _deployment: DeploymentService, private _profile: ProfileService) { }
  types: Observable<any>;

  ngOnInit() {
    this._deployment.deploymentTypes()
      .subscribe(data => {
        this.types = data;
      });
    console.log(this.deployment);
  }
  createDeployment() {
    //create a new deployment and add the current user as the owner

    this.deployment.owner = this._profile.getUserId();
    this._deployment.addDeployment(this.deployment)
      .subscribe();
  }
}
