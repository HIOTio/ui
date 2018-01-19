import { Observable } from 'rxjs/Observable';
import { DeploymentService } from '../deployment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-deployment-summary',
  templateUrl: './deployment-summary.component.html',
  styleUrls: ['./deployment-summary.component.css']
})
export class DeploymentSummaryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private depServ: DeploymentService) { }
  @Input()
  deployment;
  details: Observable<any>;
  edit = false;
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.depServ.deploymentSummary(this.deployment)
        .subscribe(data => {
          this.details = data;
        });
    });
  }
}

