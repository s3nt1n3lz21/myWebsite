import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnDestroy, AfterViewInit {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add("reveal-directive");
    window.addEventListener('scroll', this.reveal.bind(this))
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.reveal.bind(this))
  }

  ngAfterViewInit(): void {
    this.reveal();
  }

  private reveal() {
    var windowHeight = window.innerHeight;
    var elementTop = this.el.nativeElement.getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      this.el.nativeElement.classList.add("reveal-directive__revealed");
    } else {
      this.el.nativeElement.classList.remove("reveal-directive__revealed");
    }
  }
}