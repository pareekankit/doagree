import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';


@NgModule({
  declarations: [
    LoginComponent,
    VerifyOtpComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthenticationModule { }
