import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Twit} from "../../../../tyoes";
import {TwitService} from "../../../../services/twit.service";

@Component({
  selector: 'news-twits-list',
  templateUrl: './news-twits-list.component.html',
  styleUrls: ['./news-twits-list.component.scss']
})
export class NewsTwitsListComponent implements OnInit {

  twitsList: Observable<Twit[]> = of([]);

  constructor(private twitService: TwitService) {
  }

  ngOnInit(): void {
    this.getTwits();
  }

  getTwits(): void {
    this.twitsList = this.twitService.getTwits();
  }
}
