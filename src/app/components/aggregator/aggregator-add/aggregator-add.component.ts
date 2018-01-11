import { Component, OnInit, Input } from '@angular/core';
import { AggregatorService } from '../aggregator.service';
@Component({
  selector: 'app-aggregator-add',
  templateUrl: './aggregator-add.component.html',
  styleUrls: ['./aggregator-add.component.css']
})
export class AggregatorAddComponent implements OnInit {
  @Input()
  device;
  @Input()
  deployment;
  newTopic = '';
  agg = {
    name: '',
    description: '',
    topics: [],
    _id: '',
    poll: 0,
    device: '',
    deployment: '',
    channel: '',
    handler: ''
  };
  handlers=[];
  constructor(private _aggServ: AggregatorService) { }

  ngOnInit() {
  }
  addTopic() {
    this.agg.topics.push(this.newTopic);
    this.newTopic = '';
  }
  save() {
    this.agg.device = this.device;
    this.agg.deployment = this.deployment;
    this._aggServ.createAggregator(this.agg)
      .subscribe((data) => {
      },
      (err) => {
      });
  }
}
