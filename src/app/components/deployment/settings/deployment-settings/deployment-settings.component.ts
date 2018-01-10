import { Component, OnInit, Input } from '@angular/core';
import { DeploymentService } from '../../deployment.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-deployment-settings',
  templateUrl: './deployment-settings.component.html',
  styleUrls: ['./deployment-settings.component.css']
})
export class DeploymentSettingsComponent implements OnInit {
  stats: Observable<any>;
  constructor(private _depServ: DeploymentService) { }
  @Input() deployment;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  ngOnInit() {
    this._depServ.deploymentSummary(this.deployment._id)
      .subscribe((data) => this.stats = data);
  }

}
