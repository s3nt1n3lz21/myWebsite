import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { RevealDirective } from '../directives/reveal.directive';



@NgModule({
  declarations: [
    CardComponent,
    RevealDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    RevealDirective
  ]
})
export class SharedModule { }
