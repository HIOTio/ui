import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { AggregatorListComponent } from './aggregator-list/aggregator-list.component';
import { AggregatorAddComponent } from './aggregator-add/aggregator-add.component';
import { AggregatorEditComponent } from './aggregator-edit/aggregator-edit.component';
import { AggregatorHomeComponent } from './aggregator-home/aggregator-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'aggregator', component: AggregatorHomeComponent},
        {path: 'aggregator/add', component: AggregatorAddComponent},
        {path: 'aggregator/list', component: AggregatorListComponent},
        {path: 'aggregator/:id', component: AggregatorEditComponent}
      ]
    )
  ],
  declarations: [AggregatorListComponent, AggregatorAddComponent, AggregatorEditComponent, AggregatorHomeComponent]
})
export class AggregatorModule { }
