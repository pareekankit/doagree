import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  mobile_no: any;
  language:any={
    hindi:'',
    english:'',
  }

  constructor( private apiCallMethod:ApiCallMethodsService, private route:ActivatedRoute, private router:ActivatedRoute) { }
  
nextToLogin()
{
  this.route.params.subscribe((params:any)=>{
    console.log('params',params);
  })  
  this.apiCallMethod.post(apiRoutes.language,this.mobile_no).then((response:any)=>
  {
    console.log(response);
    
  })
}
  ngOnInit(): void {
  }

}
