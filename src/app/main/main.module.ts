import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductCategoryComponent } from './Sell-Animal/product-category/product-category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainModule { }
