import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  url:any;
  AvatarImg:any;
  imgFlag:number=0;
  signModalDataService:any;
  mobileNo:any;
  constructor(private apiCallMethod:ApiCallMethodsService,private sanitizer: DomSanitizer,private Route:ActivatedRoute,private router:Router) {
    apiCallMethod.get(apiRoutes.getProfile).then((response:any)=>{
      console.log(response.data)
      this.RegisterForm.setValue(
        {
         validUserName:response.data.name,
         validAge:response.data.age,
         validReferalCode:response.data.reference_code,
         validGender:response.data.gender,
         validOccupation:response.data.occupation,
         vaildMobileNo:response.data.phone,
         validImg:response.data.image,
         file:'',
        },
        
      )

    })
   
  }

  RegisterForm=new FormGroup({
    validUserName: new FormControl('',[Validators.required]),
    validAge: new FormControl('',[Validators.required]),
    validReferalCode: new FormControl('',[Validators.required]),
    validGender:new FormControl('',[Validators.required]),
    validOccupation: new FormControl('',[Validators.required]),
    vaildMobileNo:new FormControl(''),
    validImg: new FormControl(''),
    file: new FormControl('')
  });
  
 
  @ViewChild('Gender') Gender!: ElementRef;

	// checkGender(SelectImgAvatar:any):void 
  //     {

  //       if(this.imgFlag==0)
  //       {
  //         if(this.Gender.nativeElement.value=='Male'){
  //           SelectImgAvatar.src='../../../assets/Ellipse 94.png';
  //         }
  //         else{
  //           SelectImgAvatar.src='../../../assets/Femalee-farmer 2.png';
  //         }
  //       }
  //     }
  
  goOnLoginPage(){
        this.router.navigate(['/login']);
      }
  saveAndContinue()
      {
        this.Route.params.subscribe((params:any)=>{
          this.mobileNo=params.No;
        })
          let data : any = {
            name:this.RegisterForm.value.validUserName,
            picture:this.AvatarImg,
            gender:this.RegisterForm.value.validGender,
            age:this.RegisterForm.value.validAge,
            reference_code:this.RegisterForm.value.validReferalCode,
            mobile_no:this.mobileNo,
            occupation:this.RegisterForm.value.validOccupation

          } 
          this.apiCallMethod.post(apiRoutes.profile,data).
          then((response:any)=>{
            console.log(response);
            this.router.navigate(['/geolocation']);
          }).catch((error:any)=>{
            console.log(error);
          })
      }
  openGellary(fileInput:HTMLInputElement)
      {
        fileInput.click();
        console.log(fileInput)
      }
  // onSelectFile(event:any) {
  //     if (event.target.files && event.target.files[0]) 
  //     {

  //           var reader = new FileReader();

  //           reader.readAsDataURL(event.target.files[0]);

  //           reader.onload = (event:any) => 
  //           { 
  //              this.url = event.target.result;
  //              this.imgFlag=1;
  //           }
  //     }
  // }
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.RegisterForm.patchValue({
        validImg: file
      });
    }
  }
  ngOnInit(): void {
  }

}
