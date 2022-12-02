import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private apiCallMethod: ApiCallMethodsService, private router:Router) {
    apiCallMethod.get(apiRoutes.language).then((response: any) => {
      console.log(response.data);
      this.hindi = localStorage.setItem('code', response.data[0].code);
      this.english = localStorage.setItem('code', response.data[0].code);
    });

  }
 setRadio(e:any):void{
  // this.select = e;
 }
//  isSelected(language:any): any{
//   if (!this.select) { // if no radio button is selected, always return false so every nothing is shown  
//     return false;  
// }  
//   return (this.select===language); // if current radio button is selected, return true, else return false  

//  }

  nextToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
