import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;


@NgModule({
  declarations: [
    LoginComponent,
    VerifyOtpComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
