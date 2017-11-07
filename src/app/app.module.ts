import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { HttpInterceptorService } from './core/user/http-interceptor.service';
import { MaterialModule} from './material/material.module';
import {LayoutModule } from './core/layout/layout.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AggregatorModule } from './components/aggregator/aggregator.module';
import { BrokerModule } from './components/broker/broker.module';
import { ControllerModule } from './components/controller/controller.module';
import { CoordinatorModule } from './components/coordinator/coordinator.module';
import { DeploymentModule } from './components/deployment/deployment.module';
import { DeviceModule } from './components/device/device.module';
import {SettingsModule} from './core/settings/settings.module';
import { SensorModule } from './components/sensor/sensor.module';
import { ControlCentreModule } from './features/control-centre/control-centre.module';
import { HealthModule } from './features/health/health.module';
import { ReportsModule} from './features/reports/reports.module';
import {UserModule} from './core/user/user.module';
import { UpdatesService} from './updates.service';
import { SocketsService } from './sockets.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    DragulaModule,
    LayoutModule,
    DashboardModule,
    AggregatorModule,
    DeploymentModule,
    BrokerModule,
    ControllerModule,
    CoordinatorModule,
    ReportsModule,
    DashboardModule,
    ControlCentreModule,
    SettingsModule,
    HealthModule,
    RouterModule.forRoot([
      { path : '', component: HomeComponent}
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    UpdatesService,
    SocketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
