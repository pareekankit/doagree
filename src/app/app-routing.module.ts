import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { VerifyOtpComponent } from './authentication/verify-otp/verify-otp.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
  {path:'verify-otp/:number',component:VerifyOtpComponent},
  {path:'geolocation',component:GeolocationComponent},
 {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
