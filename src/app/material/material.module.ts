import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import 'hammerjs';
import {
  MatButtonModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatSidenavModule,
  MatStepperModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatSliderModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSlideToggleModule,
  MatIconRegistry,
<<<<<<< HEAD
=======
  MatTableModule,
>>>>>>> master
  MatProgressSpinnerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
<<<<<<< HEAD
=======
    MatTableModule,
>>>>>>> master
    CdkTableModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
<<<<<<< HEAD
=======
    MatTabsModule,
>>>>>>> master
    CdkTableModule,
    MatProgressSpinnerModule
  ],
  providers: [MatIconRegistry]
})
export class MaterialModule { }
