import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatAccordion,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule,
    MatIconRegistry
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [MatIconRegistry]
})
export class MaterialModule { }
