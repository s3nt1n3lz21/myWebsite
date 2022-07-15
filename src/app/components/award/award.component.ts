import { Component, Input, OnInit } from '@angular/core';
import { IAward, emptyIAward } from 'src/app/model/IAward';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public award: IAward = emptyIAward();
  @Input() set awardInput(award: IAward) {
    this.award = award;
  }
}
