import { NewQuestionModule } from './../new-question/new-question.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../../components/components.module';
import {MatTabsModule} from '@angular/material/tabs';

import { UsefulLinksModule } from './../useful-links/useful-links.module';
import { SettingsModule } from './../settings/settings.module';
import { ProfileModule } from '../profile/profile.module';
import { TestModule } from '../test/test.module';
import { HistoryModule } from '../history/history.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatTabsModule,
    ProfileModule,
    TestModule,
    SettingsModule,
    HistoryModule,
    NewQuestionModule,
    UsefulLinksModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
