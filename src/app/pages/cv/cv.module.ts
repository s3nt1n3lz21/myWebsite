import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVComponent } from './cv.component';
import { CVRoutingModule } from './cv-routing.module';
import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { CertificateComponent } from 'src/app/components/certificate/certificate.component';

@NgModule({
  declarations: [
    CVComponent,
    WorkExperienceComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    CVRoutingModule
  ]
})
export class CVModule { }
