import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
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
export class AppComponent implements OnInit, OnDestroy {
  title = 'myWebsite';

  constructor(private contexts: ChildrenOutletContexts,
    private router: Router) {}

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

    this.reveal();
    this.router.events.subscribe(
      () => this.reveal()
    )
    window.addEventListener("scroll", this.reveal);
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.reveal);
  }

  // Add classes to elements when they come into view to animate them
  reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
