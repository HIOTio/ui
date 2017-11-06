import { DeploymentService } from '../deployment.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-deployment-table-view',
  templateUrl: './deployment-table-view.component.html',
  styleUrls: ['./deployment-table-view.component.css']
})
export class DeploymentTableViewComponent implements OnInit {
  displayedColumns = ['deploymentName', 'deploymentType', 'role', 'color'];
  exampleDatabase = new ExampleDatabase(this._depServ);
  dataSource: ExampleDataSource | null;
  constructor(private _depServ: DeploymentService) { }

  ngOnInit() {
  this.dataSource = new ExampleDataSource(this.exampleDatabase);
}

}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  _data: any[];
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this._data; }

  constructor(private _depServ: DeploymentService) {
    this._depServ.getDeployments()
    .subscribe(data => {
      this._data = data;
       });
    }
  }


export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}
