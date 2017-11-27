import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-deployment-settings',
  templateUrl: './deployment-settings.component.html',
  styleUrls: ['./deployment-settings.component.css']
})
export class DeploymentSettingsComponent implements OnInit {

  constructor() { }
  @Input() deployment;
  step = 0;
  
    setStep(index: number) {
      this.step = index;
    }
  ngOnInit() {
  }

}
