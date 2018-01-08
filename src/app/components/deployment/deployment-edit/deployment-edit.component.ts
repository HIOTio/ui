import { Component, OnInit, Input } from '@angular/core';
import { DeploymentService } from '../deployment.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-deployment-edit',
  templateUrl: './deployment-edit.component.html',
  styleUrls: ['./deployment-edit.component.css']
})
export class DeploymentEditComponent implements OnInit {
  @Input()
  deployment;

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
