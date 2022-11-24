import { Component, OnInit } from '@angular/core';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiCallMethod:ApiCallMethodsService) { 
  }

  login()
  {
    let data : any = {
                        mobile_no : '9509848261'
                      }
    this.apiCallMethod.post(apiRoutes.login,data).
    then((response:any)=>{
        console.log(response);
    }).catch((error:any)=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
