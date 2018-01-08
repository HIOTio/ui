import { Observable } from 'rxjs/Rx';
import { DeploymentService } from '../deployment.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-deployment-summary',
  templateUrl: './deployment-summary.component.html',
  styleUrls: ['./deployment-summary.component.css']
})
export class DeploymentSummaryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private depServ: DeploymentService) { }

  deploymentId = 0;
  details: Observable<any>;
  edit = false;
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.deploymentId = params['id'];
      this.depServ.deploymentSummary(this.deploymentId)
        .subscribe(data => {
          this.details = data;
        });
    });
  }
}

