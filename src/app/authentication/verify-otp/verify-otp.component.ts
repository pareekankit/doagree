import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent implements OnInit {
  userData: any = {
                    mobile_no: '',
                    otp: '',
                  };
  timer: any;
  seconds_left: any;
  interval: any;

  otpForm = new FormGroup({
                            otp1: new FormControl(''),
                            otp2: new FormControl(''),
                            otp3: new FormControl(''),
                            otp4: new FormControl(''),
                          });
  invalidOtp: any;

  constructor(private apiCallMethod: ApiCallMethodsService,private route: ActivatedRoute,private router: Router)
  {
    this.route.params.subscribe((params: any)=>
    {
      console.log('params', params);
      this.userData.mobile_no = params.No;
    });

    this.startTimer();
  }

  ngOnInit(): void {}

  move(e:any,p:any,n:any) 
  {
    if(n!='')
    {
      n.focus();
    }
    // console.log(e);
    if(e.key==='Backspace') 
    {
      p.focus();
    }
  }

  startTimer()
  {
    this.seconds_left = 6;
    this.interval = setInterval(()=> 
    {
      this.timer = --this.seconds_left + 'sec';

      if (this.seconds_left <= 0) 
      {
        this.timer = '';
        clearInterval(this.interval);
      }
    }, 1000);
  }

  resendOtp() 
  {
    this.startTimer();
    this.apiCallMethod.post(apiRoutes.resendOtp, this.userData).then((response: any)=>
    {
      console.log(response);
    });
  }

  verifyOtp(event: any)
  {
    event.target.disabled = true;
    // console.log(this.otpForm.value);
    this.userData.otp = this.otpForm.value.otp1 +'' +this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4;
    console.log(this.userData);
    if (this.userData.otp)
    {
      this.apiCallMethod.post(apiRoutes.otp, this.userData).then((response: any)=>
      {
          console.log(response);
          localStorage.setItem('token', response.token);
          console.log(response.token);
          this.router.navigate(['/profile']);
      })
        .catch((error: any)=>
        {
          console.log(error.error.message);
          this.invalidOtp = error.error.message;
        });
    } 
    else
    {
      this.invalidOtp = 'Please enter OTP';
      event.target.disabled = false;
    }
  }
}
