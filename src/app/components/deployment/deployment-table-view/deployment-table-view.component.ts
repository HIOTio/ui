import { DeploymentService } from '../deployment.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-deployment-table-view',
  templateUrl: './deployment-table-view.component.html',
  styleUrls: ['./deployment-table-view.component.css']
})
export class DeploymentTableViewComponent implements OnInit {
  constructor(private _depServ: DeploymentService) { }
  deployments: Observable<any>;
  ngOnInit() {
    this._depServ.getDeployments().subscribe(data => {
      this.deployments = data;

    });
  }

}
