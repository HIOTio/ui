import { Component, OnInit, Input } from '@angular/core';
import { AggregatorService } from '../aggregator.service';

@Component({
  selector: 'app-aggregator-list',
  templateUrl: './aggregator-list.component.html',
  styleUrls: ['./aggregator-list.component.css']
})
export class AggregatorListComponent implements OnInit {
  @Input()
  device;
  @Input()
  deployment;
  aggregators: any;
  add: false;
  constructor(private _aggServ: AggregatorService) { }

  ngOnInit() {
    this._aggServ.getAggregatorsForDevice(this.device)
      .subscribe((data) => {
        this.aggregators = data;
        console.log(this.aggregators);
      });
  }
  addAgg() {
    this.add = false;
  }

}
