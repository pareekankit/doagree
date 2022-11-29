import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { LoginComponent } from "src/app/authentication/login/login.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit  {
otp: any ;
order:any ;
userdata:any={
  mobile_no:"",
}
timeLeft: number = 60;

constructor(private apiCallMethod:ApiCallMethodsService, private route:ActivatedRoute , private router:Router ) {
    
   }
  verifyOtp()
  {
    // console.log(this.otpForm.value);
    this.otp=this.otpForm.value.otp1+""+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4;
    this.route.params.subscribe((params:any)=>{
      console.log('params',params);
      this.userdata.mobile_no=params.No
    })  
    console.log(this.otp)

    this.userdata.otp=this.otp;
    console.log(this.userdata)
    this.apiCallMethod.post(apiRoutes.otp,this.userdata).then((response:any)=>{
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response.token));
      console.log(response.token)
      this.router.navigate(['/profile'])
      }).catch((error:any)=>{
      console.log(error);
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
  }
 
// startTimer() {
//     this.interval = setInterval(() => {
//       if(this.timeLeft > 0) {
//         this.timeLeft--;
//       } else {
//         this.timeLeft = 60;
//       }
//     },1000)
//   }
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
