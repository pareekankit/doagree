import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { LoginComponent } from "src/app/authentication/login/login.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit  {
otp: any ;
order:any ;
dataUser:any ;
userdata:any={
  mobile_no:"",
}
constructor(private apiCallMethod:ApiCallMethodsService, private route:ActivatedRoute , ) {
    
   }
  verifyOtp()
  {
    // console.log(this.otpForm.value);
    this.otp=this.otpForm.value.otp1+""+this.otpForm.value.otp2+""+this.otpForm.value.otp3+""+this.otpForm.value.otp4;
    this.route.params.subscribe((params:any)=>{
      console.log('params',params);
      this.userdata.mobile_no=params.No
    })  
    console.log(this.otp)

    this.userdata.otp=this.otp;
    console.log(this.userdata)
    this.apiCallMethod.post(apiRoutes.otp,this.userdata).then((response:any)=>{
      console.log(response);
      this.dataUser = response;
      localStorage.setItem('token', JSON.stringify(this.dataUser.token));
      }).catch((error:any)=>{
      console.log(error);
    })
  }
  otpForm= new FormGroup
  ({
    otp1: new FormControl(" "),
    otp2: new FormControl(" "),
    otp3: new FormControl(" "),
    otp4: new FormControl(" ")
  });
  
  ngOnInit(): void {
  }
  move(e:any,p:any,c:any,n:any)
  {
      if(n!=''){
          n.focus();
      }
        console.log(e);
  }

}
