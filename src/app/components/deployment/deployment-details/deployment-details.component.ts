import { Observable } from 'rxjs/Observable';
import { DeploymentService } from '../deployment.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-deployment-details',
  templateUrl: './deployment-details.component.html',
  styleUrls: ['./deployment-details.component.css']
})
export class DeploymentDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private depServ: DeploymentService) { }
  deploymentId = 0;
  details: Observable<any>;
  edit = { status: false };
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.deploymentId = params['id'];
      this.depServ.deploymentDetails(this.deploymentId)
        .subscribe(data => {
          this.details = data;
        });
    });
  }
}
