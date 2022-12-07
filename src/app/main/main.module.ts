import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './Miscellaneous/faq/faq.component';
import { GetContentComponent } from './Miscellaneous/get-content/get-content.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingPageComponent,
    FaqComponent,
    GetContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
