import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BuyAnimalComponent } from './buy-animal/buy-animal.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        LandingPageComponent,
        BuyAnimalComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MainModule { }
