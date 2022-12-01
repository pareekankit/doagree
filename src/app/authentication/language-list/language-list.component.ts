import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiRoutes } from 'src/app/constants/apiRoutes';
import { ApiCallMethodsService } from 'src/app/services/api-call-methods.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
})
export class LanguageListComponent implements OnInit {
  hindi:any;
  english:any;
  constructor(private apiCallMethod: ApiCallMethodsService, private router:Router) {
    apiCallMethod.get(apiRoutes.language).then((response: any) => {
      console.log(response);
      this.hindi = localStorage.setItem('code', response.data[0].code);
      this.english = localStorage.setItem('code', response.data[0].code);
    });
  }
  nextToLogin() {
    this.router.navigate(['/login',]);
  }

  ngOnInit(): void {}
}
