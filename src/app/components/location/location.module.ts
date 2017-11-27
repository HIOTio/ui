import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsTreeComponent } from './locations-tree/locations-tree.component';
import { LocationsListSelectComponent } from './locations-list-select/locations-list-select.component';
import { LocationsAddComponent } from './locations-add/locations-add.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationEditComponent } from './location-edit/location-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocationsTreeComponent, LocationsListSelectComponent, LocationsAddComponent, LocationDetailsComponent, LocationEditComponent],
  exports: [LocationsTreeComponent, LocationsListSelectComponent, LocationsAddComponent, LocationDetailsComponent, LocationEditComponent]
  
})
export class LocationModule { }
