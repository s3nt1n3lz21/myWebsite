import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/slideIn.animation';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'myWebsite';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  showDownloadOptions = false;
  downloadCVOptions = ['PDF','DOC'];
  downloadCVOption = "PDF";

  downloadCV(option) {
    console.log('option: ', option);
  };

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  value;
  disabled;
  vertical;
  getSliderTickInterval() {}
  thumbLabel;
  step;
  min;
  max;
  invert;

  lFollowX = 0;
  lFollowY = 0;
  x = 0;
  y = 0;
  friction = 1 / 30;
  
  ngOnInit() {
    const el: HTMLElement = document.querySelector(".content");

    el.addEventListener("mousemove", (e) => {
      // console.log('e.offsetX: ', e.offsetX);
      // console.log('e.offsetY: ', e.offsetY);

      let lMouseX = Math.max(-100, Math.min(100, window.outerWidth / 2 - e.clientX));
      let lMouseY = Math.max(-100, Math.min(100, window.outerHeight / 2 - e.clientY));

      // console.log('lMouseX: ', lMouseX);
      // console.log('lMouseY: ', lMouseY);

      let lFollowX = (100 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      let lFollowY = (100 * lMouseY) / 100;

      let friction;

      this.x += (lFollowX - this.x) * friction;
      this.y += (lFollowY - this.y) * friction;

      el.style.setProperty('--x', this.x + "px");
      el.style.setProperty('--y', this.y + "px");
    });
  }
}
