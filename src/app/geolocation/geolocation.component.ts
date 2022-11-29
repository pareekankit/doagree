import { Component, OnInit } from '@angular/core';
import { apiRoutes } from '../constants/apiRoutes';
import { ApiCallMethodsService } from '../services/api-call-methods.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  city:any;
  pin:any;
  
  constructor(private service:ApiCallMethodsService) {
 
 }
  userlocation:any={
  city:"",
  pincode:"",
  longitude:"",
  latitude:"",
  location_source:"manual"

}
 currlocation(){
   this.service.getlocation().subscribe((response:any)=>{
      console.log(response);
      this.city=response.city;
      this.pin=response.postal
      this.userlocation.city=this.city;
      this.userlocation.pincode=this.pin;
      this.userlocation.longitude=response.longitude.toString();
      this.userlocation.latitude=response.latitude.toString();
      this.userlocation.location_source="gps"
      console.log(this.city);
      this.pin = this.pin.split("");
      console.log(this.pin);
}) 

 }

 sendlocation(){
  console.log(this.userlocation);
  this.service.post(apiRoutes.location,this.userlocation).
  then((response:any)=>{
      console.log(response);
  }).catch((error:any)=>{
    console.log(error);
  })
 }
  ngOnInit(): void {
  }
}
