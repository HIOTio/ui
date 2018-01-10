import { Observable } from 'rxjs/Rx';
import { DeploymentService } from '../../deployment.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deployment-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  deployment = 0;
  roles: Observable<any>;
  users: Observable<any>;
  constructor(private _depServ: DeploymentService) { }

  ngOnInit() {

    this._depServ.deploymentUsers(this.deployment)
      .subscribe(data => {
        this.users = data;
      });
    this._depServ.rolesforDeployment(this.deployment)
      .subscribe(roles => {
        this.roles = roles;
      });
  }

}
