import {Component, Input} from '@angular/core';
import {Twit} from "../../../../../tyoes";

@Component({
  selector: 'twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.scss']
})
export class TwitComponent {

  @Input() twit: Twit;

}
