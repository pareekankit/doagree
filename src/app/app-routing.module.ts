import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { VerifyOtpComponent } from './authentication/verify-otp/verify-otp.component';
import { LandingPageComponent } from './main/landing-page/landing-page.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:"profile",component:ProfileComponent},
    {path:'verify-otp',component:VerifyOtpComponent},
    {path:'',redirectTo:'/profile',pathMatch:'full'},
    {path:'landing-page',component:LandingPageComponent},
    // {path:'',redirectTo:'/landing-page',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
