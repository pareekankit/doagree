import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyOtpComponent } from './authentication/verify-otp/verify-otp.component';

const routes: Routes = [
  {path:'verify-otp',component:VerifyOtpComponent},
 {path:'',redirectTo:'/verify-otp',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
