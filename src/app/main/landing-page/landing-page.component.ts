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
  sectionData:any={
    hero_banners:null,
    banner_btn:null,
    recommended_sellers:null,
    safetyTips_link:null,
    dairyPassBook:null,
    section_data:null,
  }
  baseApiDataUrl:any;
  youtube_link:any;
  safetyTips:any='';
  // safetyTips_link:any='';
  locationName:any='';
  recommenderSeller:any;
  dairyPassBook:any;
  dairyPassRevenue:any;
  dairyPassExpense:any;
  animalWantToBuy:any;
  animalWantToBuyName:any;
  recommondedPost:any;
  recommondedPostName:any;
  referOrEarn:any;
  referOrEarnData:any;
  loginPersonName:any='';
  constructor(private apiMethod:ApiCallMethodsService,private router:Router) { 
    apiMethod.get(apiRoutes.getProfile).then((response:any)=>{
      this.loginPersonName=response.data.name;
    });
    this.apiMethod.get(apiRoutes.main+""+'?language=en&longitude=88.259499&latitude=22.508421').then((Response:any)=>{
      console.log(Response);
      this.baseApiDataUrl=Response.base_url;
      Response.data.forEach((el:any) => {
        if(el.module_name_check=='hero_banners'){
          this.sectionData.hero_banners=el.section_data[1].banner;
          this.sectionData.banner_btn=el.section_data[0].title;
        }
        if(el.module_name_check=='recommended_sellers'){
         this.sectionData.recommended_sellers=el.section_data
        }
        if(el.module_name_check=='safety_tips'){
          this.sectionData.safetyTips_link=el.section_data.find((vl:any)=>(vl.title=='Safety Tips')).banner;
         }
         if(el.module_name_check=='dairy_passbook')
         {
          this.sectionData.dairyPassBook=el;
          console.log(this.sectionData.dairyPassBook)
         } 
      });
      this.youtube_link=Response.data.find((el:any)=>(el.module_name_check=='youtube_link')).section_data[0].link_selected;
      this.locationName=Response.data.find((el:any)=>(el.module_name_check=='ads_location_wise')).display_name;

      this.dairyPassBook=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).display_name
      this.dairyPassRevenue=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).section_data[0].revenue;
      this.dairyPassExpense=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).section_data[0].expense;
      this.animalWantToBuy=Response.data.find((el:any)=>(el.module_name_check=='product_filters')).section_data;
      this.animalWantToBuyName=Response.data.find((el:any)=>(el.module_name_check=='product_filters')).display_name;
      this.recommondedPost=Response.data.find((el:any)=>(el.module_name_check=="recommended_feed")).section_data;
      this.recommondedPostName=Response.data.find((el:any)=>(el.module_name_check=="recommended_feed")).display_name;
      this.referOrEarn=Response.data.find((el:any)=>(el.module_name_check=="refer_and_earn")).display_name;
      this.referOrEarnData=Response.data.find((el:any)=>(el.module_name_check=="refer_and_earn")).section_data[0].points
      
      // this.bannerImg=this.baseApiDataUrl+""+this.bannerImg_link;
      // this.safetyTips=this.baseApiDataUrl+""+this.safetyTips_link;
    })
    
  }
  getProfileData(){
    this.router.navigate(['/profile',])
  }
  setImg(event:any){
   return event.target.src='assets/Ellipse 94.png';
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
