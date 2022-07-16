import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ServiceComponent,
    ServicesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule {
  constructor(private route: ActivatedRoute) {}
}