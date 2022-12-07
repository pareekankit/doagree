import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() src='';
  @Input() imgLink='';
  @Input() cowName='';
  @Input() cowRate='';
  constructor() { }

  ngOnInit(): void {
  }

}
