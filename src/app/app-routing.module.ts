import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) 
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule) 
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) 
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then(m => m.SocialModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
