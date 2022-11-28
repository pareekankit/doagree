import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes, baseUrl } from '../constants/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class ApiCallMethodsService {

  constructor(private httpClient:HttpClient) {
    localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbXljbGllbnRkZW1vLnVzXC9kb2FncmlcL3B1YmxpY1wvYXBpXC9hdXRoXC92ZXJpZnktb3RwIiwiaWF0IjoxNjY5NTUyMTc0LCJleHAiOjE3MDExNzQ1NzQsIm5iZiI6MTY2OTU1MjE3NCwianRpIjoia2hFeUhjY3BVd1BTMFJsMSIsInN1YiI6Nzc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0._R9EmN7L0c5LOfgxgnI4P-NzchinxnfA_Vi4y17q1Kw');
   }

  get(url:any)
  {
      let apiUrl = baseUrl + url;
      let headers = new HttpHeaders().set(
        'Authorization',
        'Bearer' + ' ' + localStorage.getItem('token')
      );
      return new Promise((resolve , reject)=>{
          this.httpClient.get(apiUrl,{headers : headers}).subscribe(
            (res:any) => {
              resolve(res);
            }

          )
      })
  }
  
  post(url:any, data:any)
  {
    let apiUrl = baseUrl + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' +  localStorage.getItem('token')
    );
    return new Promise((resolve , reject)=>{
      this.httpClient.post(apiUrl,data,{headers : headers}).subscribe(
        (res:any) => {
          resolve(res);
        }
      )
    })
  }

  put(url:any, data:any)
  {
    let apiUrl = baseUrl + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' + localStorage.getItem('token')
    );
    return new Promise((resolve , reject)=>{
      this.httpClient.put(apiUrl,data,{headers : headers}).subscribe(
        (res:any) => {
          resolve(res);
        }
      )
    })
  }

  delete(url:any)
  {
    let apiUrl = baseUrl + url;
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer' + ' ' + localStorage.getItem('token')
    );
    return new Promise((resolve , reject)=>{
      this.httpClient.delete(apiUrl,{headers : headers}).subscribe(
        (res:any) => {
          resolve(res);
        }
      )
    })
  }
}
