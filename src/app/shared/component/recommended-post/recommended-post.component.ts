import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.css']
})
export class RecommendedPostComponent {

  @Input() recommendedPostDataFromParent:any;
  @Input() baseUrlForChild:any;
  
  constructor(){
    if(this.recommendedPostDataFromParent){
      console.warn(this.recommendedPostDataFromParent)
    }

  }
}
