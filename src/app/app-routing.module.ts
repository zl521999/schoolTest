import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PersonalFilesComponent } from './components/personal-files/personal-files.component';
import { WorkComponent } from './components/work/work.component';
import { TemperatureComponent} from './components/temperature/temperature.component';
import { HeartComponent } from './components/heart/heart.component';
import { LocationComponent } from './components/location/location.component';
import { SportComponent } from './components/sport/sport.component';
import { WarnComponent } from './components/warn/warn.component';
import { EnvironmentComponent } from './components/environment/environment.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"workCollect",component:WorkComponent},
  {path:"tempertureCollect",component:TemperatureComponent},
  {path:"heartCollect",component:HeartComponent},
  {path:"locationtCollect",component:LocationComponent},
  {path:"sportCollect",component:SportComponent},
  {path:"warnCollect",component:WarnComponent},
  {path:"environmentCollect",component:EnvironmentComponent},
  {path:"personalFiles",component:PersonalFilesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
