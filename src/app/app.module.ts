import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import {MaterialModule} from './material.module';
import { LayoutModule} from './layout/layout.module';
import { AppComponent } from './app.component';
import {DashboardModule } from './components/dashboard/dashboard.module';
import {ReportsModule} from './components/reports/reports.module';
import {UserModule} from './core/user/user.module';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent, data: { state: 'home' } }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    DashboardModule,
    ReportsModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
