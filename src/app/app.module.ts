import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { TemperatureComponent} from './components/temperature/temperature.component';
import { HeartComponent } from './components/heart/heart.component';
import { LocationComponent } from './components/location/location.component';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SportComponent } from './components/sport/sport.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { WarnComponent } from './components/warn/warn.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalFilesComponent } from './components/personal-files/personal-files.component';

import {NgxEchartsModule} from "ngx-echarts"


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    TemperatureComponent,
    HeartComponent,
    LocationComponent,
    SportComponent,
    EnvironmentComponent,
    WarnComponent,
    HomeComponent,
    PersonalFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
