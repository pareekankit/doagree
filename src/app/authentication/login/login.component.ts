import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobileNumber:any;
  constructor(private apiCallMethod:ApiCallMethodsService) { 
    
  }
  loginform=new FormGroup({
  InputNumber:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  });

  login()
  {
    console.log(this.loginform.value);
    let data : any = {
                       mobile_no:this.loginform.value.InputNumber
                      }
    this.apiCallMethod.post(apiRoutes.login,data).
    then((response:any)=>{
        console.log(response);
    }).catch((error:any)=>{
      console.log(error);
    })
  }
  get InputNumber(){
    return this.loginform.get("InputNumber");
  }

  ngOnInit(): void {
  }

}
