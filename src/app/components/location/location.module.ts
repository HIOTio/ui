import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsTreeComponent } from './locations-tree/locations-tree.component';
import { LocationsListSelectComponent } from './locations-list-select/locations-list-select.component';
import { LocationsAddComponent } from './locations-add/locations-add.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationService } from './location.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LocationsTreeComponent, LocationsListSelectComponent, LocationsAddComponent, LocationDetailsComponent, LocationEditComponent],
  exports: [LocationsTreeComponent, LocationsListSelectComponent, LocationsAddComponent, LocationDetailsComponent, LocationEditComponent],
  providers: [LocationService]
})
export class LocationModule { }
