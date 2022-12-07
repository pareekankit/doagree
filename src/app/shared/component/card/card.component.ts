import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() userImage='';
  @Input() userName='';
  @Input() location='';
  @Input() Follow='';
  constructor() { }

  ngOnInit(): void {
  }

}
