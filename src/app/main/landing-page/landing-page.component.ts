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
  baseApiDataUrl:any;
  youtube_link:any;
  bannerImg:any;
  bannerImg_link:any;
  sellAnimal:any='';
  safetyTips:any='';
  safetyTips_link:any='';
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
      // console.log(response.data.name)
      this.loginPersonName=response.data.name;
    });
    this.apiMethod.get(apiRoutes.main+""+'?language=en&longitude=88.259499&latitude=22.508421').then((Response:any)=>{
      // console.log(Response);
      this.youtube_link=Response.data.find((el:any)=>(el.module_name_check=='youtube_link')).section_data[0].link_selected;
      this.bannerImg_link=Response.data.find((el:any)=>(el.module_name_check=='hero_banners')).section_data[1].banner;
      this.sellAnimal=Response.data.find((el:any)=>(el.module_name_check=='hero_banners')).section_data
      .find((el:any)=>(el.title=='Sell Animal')).button_text;
      this.safetyTips_link=Response.data.find((el:any)=>(el.module_name_check=='safety_tips')).section_data.find((el:any)=>(el.title=='Safety Tips')).banner;
      this.locationName=Response.data.find((el:any)=>(el.module_name_check=='ads_location_wise')).display_name;
      this.recommenderSeller=Response.data.find((el:any)=>(el.module_name_check=='recommended_sellers')).section_data;
      this.dairyPassBook=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).display_name
      this.dairyPassRevenue=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).section_data[0].revenue;
      this.dairyPassExpense=Response.data.find((el:any)=>(el.module_name_check=='dairy_passbook')).section_data[0].expense;
      this.animalWantToBuy=Response.data.find((el:any)=>(el.module_name_check=='product_filters')).section_data;
      this.animalWantToBuyName=Response.data.find((el:any)=>(el.module_name_check=='product_filters')).display_name;
      this.recommondedPost=Response.data.find((el:any)=>(el.module_name_check=="recommended_feed")).section_data;
      this.recommondedPostName=Response.data.find((el:any)=>(el.module_name_check=="recommended_feed")).display_name;
      this.referOrEarn=Response.data.find((el:any)=>(el.module_name_check=="refer_and_earn")).display_name;
      this.referOrEarnData=Response.data.find((el:any)=>(el.module_name_check=="refer_and_earn")).section_data[0].points
      this.baseApiDataUrl=Response.base_url;
      this.bannerImg=this.baseApiDataUrl+""+this.bannerImg_link;
      this.safetyTips=this.baseApiDataUrl+""+this.safetyTips_link;
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
