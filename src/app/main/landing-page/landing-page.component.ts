import { Component, Input, OnInit } from '@angular/core';
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
                    baseApiDataUrl:null,
                    loginPersonDetail:null,
                    hero_banners:null,
                    banner_btn:null,
                    recommended_sellers:null,
                    safetyTips_link:null,
                    dairyPassBook:null,
                    animal_buy:null,
                    recommended_feed:null,
                    refer_and_earn:null,
                    ads_location_wise:null,
                    youtube_link:null,

                    }

    value:any='text input';  
    imgSrc:any='/assets/Rectangle 111.png';
    animalName:any='Sahiwal Cow';
    animalRate:any='R 43000';
    sectionDataArray:any;          
    sendBaseUrlToChild:any;
    recommandedDataToChild:any;    
  constructor(private apiMethod:ApiCallMethodsService,private router:Router) { 
      
      apiMethod.get(apiRoutes.getProfile).then((response:any)=>{
                    this.sectionData.loginPersonDetail=response.data.name;

      });
    
      apiMethod.get(apiRoutes.main+""+'?language=en&longitude=88.259499&latitude=22.508421').then((Response:any)=>{
              
                    this.sectionData.baseApiDataUrl =Response.base_url;
                    this.sendBaseUrlToChild=Response.base_url;
                    Response.data.forEach((el:any) => {
                      
                          if(el.module_name_check=="youtube_link"){
                                    console.log(el.section_data)
                                    this.sectionData.youtube_link=el.section_data
                          }
                          if(el.module_name_check=='hero_banners'){

                                    this.sectionData.hero_banners=el.section_data[1].banner;
                                    this.sectionData.banner_btn=el.section_data[0].title;
                          }
                          if(el.module_name_check=='recommended_sellers'){

                                    this.sectionData.recommended_sellers=el.section_data;
                                    this.sectionDataArray=el.section_data;
                          }
                          if(el.module_name_check=='safety_tips'){

                                    this.sectionData.safetyTips_link=el.section_data.find((vl:any)=>(vl.title=='Safety Tips')).banner;
                          }
                          if(el.module_name_check=='dairy_passbook'){
                                
                                    this.sectionData.dairyPassBook=el.section_data;
                          } 
                        
                          if(el.module_name_check=='product_filters'){

                                    this.sectionData.animal_buy=el;
                          }
                          if(el.module_name_check=="recommended_feed"){

                                    this.sectionData.recommended_feed=el;
                                    this.recommandedDataToChild=el.section_data;
                                    console.log(this.recommandedDataToChild)
                          }  
                          if(el.module_name_check=="refer_and_earn"){
                            
                                    this.sectionData.refer_and_earn=el;
                          }   
                          if(el.module_name_check=='ads_location_wise'){

                                    this.sectionData.ads_location_wise=el;
                          }   
                    });
      });
    
  }

  ngOnInit(): void {
  }
     
  getProfileData(){
      this.router.navigate(['/profile',]);

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

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
 
 
}
