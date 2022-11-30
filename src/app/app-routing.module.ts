import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { VerifyOtpComponent } from './authentication/verify-otp/verify-otp.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { LandingPageComponent } from './main/landing-page/landing-page.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:"profile/:No",component:ProfileComponent},
 {path:'verify-otp/:No',component:VerifyOtpComponent},
 {path:'geolocation',component:GeolocationComponent},
 {path:'landing-page',component:LandingPageComponent},
 {path:'',redirectTo:'/landing-page',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
