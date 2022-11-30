import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes, baseUrl } from '../constants/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class ApiCallMethodsService {

  constructor(private httpClient:HttpClient) {}

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
