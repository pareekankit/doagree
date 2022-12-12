import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() FollowtoPerson = new EventEmitter<any>();

  followRequested(value:any)
  {
    this.FollowtoPerson.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
