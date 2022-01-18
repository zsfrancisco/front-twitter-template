import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {SuggestedFollow, SuggestedNews} from "../tyoes";
import {SUGGESTED_FOLLOW, SUGGESTED_NEWS} from "../data/suggested-fake-data";

@Injectable({
  providedIn: 'root'
})
export class SuggestedService {

  getSuggestedNews(): Observable<SuggestedNews[]> {
    return of(SUGGESTED_NEWS)
  }

  getSuggestedFollow(): Observable<SuggestedFollow[]> {
    return of(SUGGESTED_FOLLOW)
  }
}
