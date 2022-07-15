import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVResolverService } from './cv-resolver.service';
import { CVComponent } from './cv.component';


const routes: Routes = [
  { 
    path: '', 
    component: CVComponent,
    resolve: {
      customer: CVResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CVRoutingModule { }