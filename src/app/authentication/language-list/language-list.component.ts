import { Component, Injector, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
})

export class LanguageListComponent implements OnInit {
  hindi:any;
  english:any;
  select:any;
  
  constructor(private apiCallMethod: ApiCallMethodsService, private router:Router) 
  {
    apiCallMethod.get(apiRoutes.language).then((response: any)=>
    {
      console.log(response.data);
      this.hindi = response.data[1].code;
      // console.log(this.hindi);    
      this.english = response.data[0].code;
      // console.log(this.english); 
    });
  }

  ngOnInit(): void {}

  setRadio(e:any){
    if(e==this.hindi){
      localStorage.setItem('code',this.hindi);
    }
    else
    {
      localStorage.setItem('code',this.english);
    }
   }

  nextToLogin(): void {
    this.router.navigate(['/login']);
  }
}
