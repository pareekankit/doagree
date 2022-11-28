import { Component, OnInit } from '@angular/core';
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
 currlocation(){
  this.service.getlocation().subscribe((response:any)=>{
    console.log(response);
   this.city=response.city;
   this.pin=response.postal;
   console.log(this.city);
  this.pin = this.pin.split("");
   console.log(this.pin);

   }) 

 }

  ngOnInit(): void {
  }
}
