import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
baseUrl:any = "https://myclientdemo.us/doagri/public";

  @Input() userImage='';
  @Input() userName='';
  @Input() location='';


  constructor() { }

  ngOnInit(): void {
  }

}
