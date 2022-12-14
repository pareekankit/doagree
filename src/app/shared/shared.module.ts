import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { ButtonComponent } from './component/button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
