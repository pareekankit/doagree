import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  sectionData:any=
  {
    askQuestion:null,
  }
  constructor(private apiMethod:ApiCallMethodsService,
              private router:Router)
              { 
                
                apiMethod.get(apiRoutes.faq+'?language='+localStorage.getItem('code')).then((response:any)=>{

                    this.sectionData.askQuestion=response.data;
                    console.log(response.data)
                });
              }
  ngOnInit(): void {
  }

}
