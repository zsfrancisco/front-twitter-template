import {Component, OnInit} from '@angular/core';
import {SuggestedService} from "../../../services/suggested.service";
import {Observable, of} from "rxjs";
import {SuggestedFollow} from "../../../tyoes";

@Component({
  selector: 'suggested-follow',
  templateUrl: './suggested-follow.component.html',
  styleUrls: ['./suggested-follow.component.scss']
})
export class SuggestedFollowComponent implements OnInit {

  suggestedFollowList: Observable<SuggestedFollow[]> = of([]);

  constructor(private suggestedService: SuggestedService) {
  }

  ngOnInit(): void {
    this.getSuggestedFollowList();
  }

  getSuggestedFollowList(): void {
    this.suggestedFollowList = this.suggestedService.getSuggestedFollow();
  }

}
