import { Component, OnInit, Input, Output } from '@angular/core';
import { MakeService } from '../make.service';
import { ModelService } from '../model.service';
@Component({
  selector: 'app-make-model',
  templateUrl: './make-model.component.html',
  styleUrls: ['./make-model.component.css']
})
export class MakeModelComponent implements OnInit {
  @Input() @Output()
  make;
  @Input() @Output()
  model;
  makes: any;
  models: any;
  constructor(private _makeServ: MakeService, private _modelServ: ModelService) { }

  ngOnInit() {
    this._makeServ.getMakes()
      .subscribe((data) => {
        this.makes = data;
      });
    this.getModels();
  }
  getModels() {
    this._modelServ.getModels(this.make)
      .subscribe((data) => {
        console.log(data);
        this.models = data;
      });
  }

}
