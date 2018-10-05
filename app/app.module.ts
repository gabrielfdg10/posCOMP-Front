import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginScreenModule } from './main/login-screen/login-screen.module';
import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginScreenModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
