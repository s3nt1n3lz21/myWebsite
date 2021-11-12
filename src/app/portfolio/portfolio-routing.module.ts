import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioResolverService } from './portfolio-resolver.service';
import { PortfolioComponent } from './Portfolio.component';


const routes: Routes = [
  { 
    path: '', 
    component: PortfolioComponent,
    resolve: {
      customer: PortfolioResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
