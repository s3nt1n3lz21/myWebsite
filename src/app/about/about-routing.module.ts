import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutResolverService } from './about-resolver.service';
import { AboutComponent } from './about.component';


const routes: Routes = [
  { 
    path: '', 
    component: AboutComponent,
    resolve: {
      customer: AboutResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
