import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginScreenComponent } from './main/login-screen/login-screen.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {path: '*', component: LoginScreenComponent },
  {path: 'login', component: LoginScreenComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
