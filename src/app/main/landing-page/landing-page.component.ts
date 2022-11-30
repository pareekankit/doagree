import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  personName:any='Mukesh-K-Sardiwal';
  baseApiDataUrl:any;
  youtube_link:any;
  bannerImg:any;
  bannerImg_link:any;
  sellAnimal:any='';
  safetyTips:any='';
  safetyTips_link:any='';
  locationName:any='';
  recommenderSeller:any;
  constructor(private apiMethod:ApiCallMethodsService,private router:Router) { 

    this.apiMethod.get(apiRoutes.main+""+'?language=en&longitude=88.259499&latitude=22.508421').then((Response:any)=>{
      console.log(Response);
      this.youtube_link=Response.data.find((el:any)=>(el.module_name_check=='youtube_link')).section_data[0].link_selected;
      this.bannerImg_link=Response.data.find((el:any)=>(el.module_name_check=='hero_banners')).section_data[0].banner;
      this.sellAnimal=Response.data.find((el:any)=>(el.module_name_check=='hero_banners')).section_data
      .find((el:any)=>(el.title=='Sell Animal')).button_text;
      
      this.safetyTips_link=Response.data.find((el:any)=>(el.module_name_check=='safety_tips')).section_data.find((el:any)=>(el.title=='Safety Tips')).banner;
      console.log(this.safetyTips_link)
      this.locationName=Response.data.find((el:any)=>(el.module_name_check=='ads_location_wise')).display_name;
      this.recommenderSeller=Response.data.find((el:any)=>(el.module_name_check=='arecommended_sellers')).section_data
      
      this.baseApiDataUrl=Response.base_url;
      this.bannerImg=this.baseApiDataUrl+""+this.bannerImg_link;
      this.safetyTips=this.baseApiDataUrl+""+this.safetyTips_link;
      console.log('let',this.safetyTips)
    })
    
  }
  getProfileData(){

  }
  logOut(){
    let data ={};
        this.apiMethod.post(apiRoutes.logOut,data)
        .then((response: any) => {
          console.log(response);
          this.router.navigate(['/login']);
      }).catch((error:any)=>{
        console.log(error);
      })
  }

  ngOnInit(): void {
  }
 
}
