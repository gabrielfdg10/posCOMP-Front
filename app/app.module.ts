import { ProfileComponent } from "./main/modules/profile/profile.component";
import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { LoginScreenModule } from "./main/login-screen/login-screen.module";
import { HttpService } from "./services/http.service";
import { RegisterModule } from "./main/register/register.module";
import { DashboardModule } from './main/modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    LoginScreenModule,
    RegisterModule,
    DashboardModule,

  ],
  exports: [],
  providers: [
    HttpService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
