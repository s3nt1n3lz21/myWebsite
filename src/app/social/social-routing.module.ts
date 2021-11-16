import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialResolverService } from './social-resolver.service';
import { SocialComponent } from './social.component';


const routes: Routes = [
  { 
    path: '', 
    component: SocialComponent,
    resolve: {
      customer: SocialResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
