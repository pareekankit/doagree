import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
otps: any ;
userdata={
  mobile_no:"9509809222",
  otp:""
}
  constructor(private apiCallMethod:ApiCallMethodsService) { }
  verifyOtp()
  {
    // console.log(this.otpForm.value);
    this.otps=this.otpForm.value.otp1+this.otps+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4;
    this.userdata.otp=this.otps;
    console.log(this.otps);
    this.apiCallMethod.post(apiRoutes.otp,this.userdata).
    then((response:any)=>{
      console.log(response);
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

}
