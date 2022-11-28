import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { VerifyOtpComponent } from './authentication/verify-otp/verify-otp.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:'verify-otp',component:VerifyOtpComponent},
 {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
