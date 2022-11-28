import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  url:any;
  AvatarImg:any='../../../assets/Ellipse 94.png';
  imgFlag:number=0;
  signModalDataService:any;
  constructor(private apiCallMethod:ApiCallMethodsService,private sanitizer: DomSanitizer) {}

  RegisterForm=new FormGroup({
    validUserName: new FormControl('',[Validators.required]),
    validAge: new FormControl('',[Validators.required]),
    validReferalCode: new FormControl('',[Validators.required]),
    validGender:new FormControl('',[Validators.required])
  });
 
  @ViewChild('Gender') Gender!: ElementRef;

	checkGender(SelectImgAvatar:any):void 
      {
        console.log(this.imgFlag)
        if(this.imgFlag==0)
        {
            if(this.Gender.nativeElement.value=='Male'){
            SelectImgAvatar.src='../../../assets/Ellipse 94.png';
          }
          else{
            SelectImgAvatar.src='../../../assets/Femalee-farmer 2.png';
          }
        }
      }
   
  saveandContinue()
      {
        console.log(this.RegisterForm.value)
          let data : any = {
            name:this.RegisterForm.value.validUserName,
            mobile_no : '9509848261',
            picture:this.AvatarImg,
            gender:this.RegisterForm.value.validGender,
            age:this.RegisterForm.value.validAge,
            reference_code:'',
            language:'hi'
          }
          this.apiCallMethod.post(apiRoutes.login,data).
          then((response:any)=>{
            console.log(response);
          }).catch((error:any)=>{
            console.log(error);
          })
      }
  openGellary(fileInput:HTMLInputElement)
      {
        fileInput.click();
      }
  onSelectFile(event:any) {
      if (event.target.files && event.target.files[0]) 
      {

            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]);

            reader.onload = (event:any) => 
            { 
               this.url = event.target.result;
               this.imgFlag=1;
            }
      }
  }
  ngOnInit(): void {
  }

}
