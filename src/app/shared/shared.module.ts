import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { SellerCardComponent } from './component/seller-card/seller-card.component';




@NgModule({
  declarations: [
    CardComponent,
    SellerCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    SellerCardComponent
  ]

})
export class SharedModule { }
