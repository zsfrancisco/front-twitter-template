import {Component, Input} from '@angular/core';
import {SuggestedNews} from "../../../../tyoes";

@Component({
  selector: 'suggested-news-item',
  templateUrl: './suggested-news-item.component.html',
  styleUrls: ['./suggested-news-item.component.scss']
})
export class SuggestedNewsItemComponent {

  @Input() suggestedNewsItem: SuggestedNews;

}
