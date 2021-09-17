import { Component, HostListener } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myWebsite';

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

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log(window.scrollY)
    const header = document.querySelector('.toolbar');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled'); 
    }
  }
}
