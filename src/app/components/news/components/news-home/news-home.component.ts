import { Component } from '@angular/core';

@Component({
  selector: 'news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent {

  optionButtons: string[] = [
    'For you',
    'Following'
  ]
  
  optionSelected = this.optionButtons[0];

}
