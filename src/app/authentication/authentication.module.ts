import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageListComponent } from './language-list/language-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    VerifyOtpComponent,
    LanguageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[]


})
export class AuthenticationModule { }
