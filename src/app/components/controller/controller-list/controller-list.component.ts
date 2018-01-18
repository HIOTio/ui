import { Component, OnInit, Input } from '@angular/core';
import { ControllerService } from '../controller.service';
@Component({
  selector: 'app-controller-list',
  templateUrl: './controller-list.component.html',
  styleUrls: ['./controller-list.component.css']
})
export class ControllerListComponent implements OnInit {
  @Input()
  deploymentId = '';
  controllers: any;
  constructor(private _controllerServ: ControllerService) { }

  ngOnInit() {
    this._controllerServ.deploymentController(this.deploymentId)
      .subscribe(
      (data) => {
        this.controllers = data;
        console.log(this.controllers);
      });
  }

}
