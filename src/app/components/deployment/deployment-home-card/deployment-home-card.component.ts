import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import { DeploymentService} from '../deployment.service';

@Component({
  selector: 'app-deployment-home-card',
  templateUrl: './deployment-home-card.component.html',
  styleUrls: ['./deployment-home-card.component.css']
})
export class DeploymentHomeCardComponent implements OnInit {

  deployments: Observable<any>;
  constructor(private _depServ: DeploymentService) { }

  ngOnInit() {
    this._depServ.getDeployments()
    .subscribe(data => this.deployments = data);
  }

}
