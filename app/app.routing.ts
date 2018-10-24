import { UsefulLinksComponent } from './main/modules/useful-links/useful-links.component';
import { RegisterComponent } from './main/register/register.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginScreenComponent } from './main/login-screen/login-screen.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/modules/dashboard/dashboard.component';
import { ProfileComponent } from './main/modules/profile/profile.component';
import { TestComponent } from './main/modules/test/test.component';
import { HistoryComponent } from './main/modules/history/history.component';
import { SettingsComponent } from './main/modules/settings/settings.component';
import { NewQuestionComponent } from './main/modules/new-question/new-question.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
  {path: 'login',
   component: LoginScreenComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'useful',
        component: UsefulLinksComponent
      },
      {
        path: 'new-question',
        component: NewQuestionComponent
      }
    ]
  },

]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
