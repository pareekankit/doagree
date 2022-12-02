import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit  {
invalidOtp:any;
userData:any={
  mobile_no:"",
  otp: ''
}
  id: any;

constructor(private apiCallMethod:ApiCallMethodsService, private route:ActivatedRoute , private router:Router) {
      this.route.params.subscribe((params:any)=>{
        console.log('params',params);
        this.userData.mobile_no=params.No;
      })  
   }
  //  setInterval(verifyOtp, 1000); 

  verifyOtp(event:any)
  {
      event.target.disabled=true;
    // console.log(this.otpForm.value);
    this.userData.otp = this.otpForm.value.otp1+""+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4;
    console.log(this.userData)
    if (this.userData.otp) {
      this.apiCallMethod.post(apiRoutes.otp,this.userData).then((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response.token);
        console.log(response.token);
        this.router.navigate(['/profile'])
        }).catch((error:any)=>{
        console.log(error.error.message);
        this.invalidOtp=error.error.message;
      })
    } else {
      this.invalidOtp = "Please enter OTP";
    }
  }

  resendOtp(){
    this.apiCallMethod.post(apiRoutes.resendOtp,this.userData).then((response:any)=>{
      console.log(response);
    })
  }

  otpForm= new FormGroup
  ({
    otp1: new FormControl(""),
    otp2: new FormControl(""),
    otp3: new FormControl(""),
    otp4: new FormControl("")
  });
  
  ngOnInit(): void {
    // this.verifyOtp(this.id);
    // this.id = setInterval(() => {
    //   this.resendOtp
    // }, 5000);

  }
  move(e:any,p:any,n:any)
  {
      if(n!=''){
          n.focus();
      }
        console.log(e);
      if (e.key === 'Backspace') {
          p.focus();
        }
  }

}
