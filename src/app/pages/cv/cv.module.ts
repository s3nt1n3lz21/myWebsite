import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVComponent } from './cv.component';
import { CVRoutingModule } from './cv-routing.module';
import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { CertificateComponent } from 'src/app/components/certificate/certificate.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { AwardComponent } from 'src/app/components/award/award.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CVComponent,
    WorkExperienceComponent,
    CertificateComponent,
    EducationComponent,
    AwardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CVRoutingModule
  ]
})
export class CVModule { }
