import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SocialComponent } from './social/social.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'social',
    component: SocialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
