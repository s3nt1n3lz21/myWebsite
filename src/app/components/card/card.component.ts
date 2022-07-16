import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('card', {static: true}) cardElement: ElementRef;

  @Input() set classInput(classes: string[]) {
    console.log(this.cardElement);
    console.log(typeof this.cardElement)
    classes.forEach(
      (c) => {
        this.cardElement.nativeElement.classList.add(c);
      }
    )
  }

}
