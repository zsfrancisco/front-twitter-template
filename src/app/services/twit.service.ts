import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Twit} from "../tyoes";
import {TWITS} from "../data";

@Injectable({
  providedIn: 'root'
})
export class TwitService {

  constructor() {
  }

  getTwits(): Observable<Twit[]> {
    return of(TWITS);
  }
}
