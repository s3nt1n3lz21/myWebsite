import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { ServicesComponent } from './Services.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule {
  constructor(private route: ActivatedRoute) {}
}