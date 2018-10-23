import { ComponentsModule } from './../../components/components.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { StatsComponent } from './stats/stats.component';
import { RegistrationDataComponent } from './registration-data/registration-data.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ChartsModule,
    ComponentsModule
  ],
  declarations: [
    ProfileComponent,
    StatsComponent,
    RegistrationDataComponent
  ]
})
export class ProfileModule { }
