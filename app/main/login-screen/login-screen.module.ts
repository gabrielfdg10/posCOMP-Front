import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [
    LoginScreenComponent,
  ],
  exports: [
    LoginScreenComponent
  ],
  providers: [
    HttpService
  ]
})
export class LoginScreenModule { }
