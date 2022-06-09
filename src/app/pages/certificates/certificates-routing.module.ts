import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificatesResolverService } from './certificates-resolver.service';
import { CertificatesComponent } from './certificates.component';


const routes: Routes = [
  { 
    path: '', 
    component: CertificatesComponent,
    resolve: {
      customer: CertificatesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule { }