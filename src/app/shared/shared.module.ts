import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { SellerCardComponent } from './component/seller-card/seller-card.component';
import { RecommendedPostComponent } from './component/recommended-post/recommended-post.component';




@NgModule({
  declarations: [
    CardComponent,
    SellerCardComponent,
    RecommendedPostComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    CardComponent,
    SellerCardComponent,
    RecommendedPostComponent
  ]

})
export class SharedModule { }
