import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  implements OnInit {
  followingStatus:any;
  @Output() FollowtoPerson = new EventEmitter<any>();
 
  constructor(private apiMethod:ApiCallMethodsService) { 
    apiMethod.get(apiRoutes.followStatus+"?following_id=585").then((response:any)=>
    {
      this.followingStatus=response.message;
      // console.log(response);
    });
  }

  ngOnInit(): void {
  }

  followRequested()
  {
    this.FollowtoPerson.emit(this.followingStatus);
  }

}
