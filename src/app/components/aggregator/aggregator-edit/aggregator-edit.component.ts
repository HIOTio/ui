import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aggregator-edit',
  templateUrl: './aggregator-edit.component.html',
  styleUrls: ['./aggregator-edit.component.css']
})
export class AggregatorEditComponent implements OnInit {
  @Input()
  agg;
  newTopic = '';
  constructor() { }

  ngOnInit() {
  }
  addTopic() {
    this.agg.topics.push(this.newTopic);
    this.newTopic = '';
  }
}
