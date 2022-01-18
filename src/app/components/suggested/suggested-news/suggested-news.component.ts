import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {SuggestedService} from "../../../services/suggested.service";
import {SuggestedNews} from "../../../tyoes";

@Component({
  selector: 'suggested-news',
  templateUrl: './suggested-news.component.html',
  styleUrls: ['./suggested-news.component.scss']
})
export class SuggestedNewsComponent implements OnInit {

  suggestedNewsList: Observable<SuggestedNews[]> = of([]);

  constructor(private suggestedService: SuggestedService) {
  }

  ngOnInit(): void {
    this.getSuggestedNewsList();
  }

  getSuggestedNewsList(): void {
    this.suggestedNewsList = this.suggestedService.getSuggestedNews();
  }
}
