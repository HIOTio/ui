import { Observable } from 'rxjs/Observable';
import { DeploymentService } from '../deployment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deployment-list',
  templateUrl: './deployment-list.component.html',
  styleUrls: ['./deployment-list.component.css']
})
export class DeploymentListComponent implements OnInit {

  view = 'cards';
  public deployments: Observable <any>;
  constructor(private depServ: DeploymentService) { }

  ngOnInit() {
   this.depServ.getDeployments().subscribe(data => {
     this.deployments = data;

    });

  }
  viewToggle() {
    if (this.view === 'cards') {
      this.view = 'table';
    }else {
      this.view = 'cards';
    }
  }

}
