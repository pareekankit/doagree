import { Component, Input, OnInit } from '@angular/core';
import { baseUrl } from 'src/app/constants/apiRoutes';
@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrls: ['./seller-card.component.css']
})
export class SellerCardComponent implements OnInit {
  // @Input() sectionData={
  //   baseApiDataUrl:null,
  //   recommended_sellers:null
  // }

  // @Input() sectionDataRecommendedSeller=null; 
     @Input() baseUrlSended=null;
  // @Input() personImage=null;
  // @Input() personState=null;
  // @Input() personName=null;
  // @Input() personPhone=null;
     @Input() personValue: any;

  constructor() {

   }

  ngOnInit(): void {
  }

}
