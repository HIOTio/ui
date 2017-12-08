import { Component, OnInit, Input } from '@angular/core';
import {DeploymentService} from '../deployment.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-deployment-create',
  templateUrl: './deployment-create.component.html',
  styleUrls: ['./deployment-create.component.css']
})
export class DeploymentCreateComponent implements OnInit {
  deployment= {
    name: '',
    description: '',
    type: {}
  };
  constructor(private _deployment: DeploymentService) { }
  types: Observable<any>;

    ngOnInit() {
          this._deployment.deploymentTypes()
          .subscribe(data => {
            this.types = data;
          });
          console.log(this.deployment);
      }
      updateDeployment() {
        this._deployment.updateDeployment(this.deployment)
        .subscribe();
      }
  }
