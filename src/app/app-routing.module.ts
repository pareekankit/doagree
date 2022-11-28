import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './authentication/profile/profile.component';

const routes: Routes = [
  {path:"profile",component:ProfileComponent},
  {path:"",redirectTo:"/profile",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
