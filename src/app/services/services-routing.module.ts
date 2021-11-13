import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesResolverService } from './services-resolver.service';
import { ServicesComponent } from './Services.component';


const routes: Routes = [
  { 
    path: '', 
    component: ServicesComponent,
    resolve: {
      customer: ServicesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
