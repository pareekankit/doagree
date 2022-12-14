import { Component } from '@angular/core';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  sectionData:any={
                  baseApiDataUrl:null,
                  productCategoryData:null,

  }
  selectedAnimalBreed:string ='';
  checkOption:boolean=false;
  constructor(private apiMethod:ApiCallMethodsService){

              apiMethod.get(apiRoutes.productcategory+'?language='+localStorage.getItem('code')).then((Response:any)=>{
                console.log(Response)
                        this.sectionData.baseApiDataUrl = Response.base_url;
                        this.sectionData.productCategoryData=Response.data;
              });  

  }
  showListOfOption(){
    this.checkOption=true;  
  }
  thisOptionSelected(event:any){
    this.selectedAnimalBreed=event.target.innerText;
    this.checkOption=false;
  }

}
