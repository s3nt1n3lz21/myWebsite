import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), 
  //   data: { animation: 'home' }
  // },
  {
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule), 
    data: { animation: 'portfolio' }
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule),
    data: { animation: 'services' }
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    data: { animation: 'about' }
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
    data: { animation: 'blogs' } 
  },
  {
    path: 'certificates',
    loadChildren: () => import('./pages/certificates/certificates.module').then(m => m.CertificatesModule),
    data: { animation: 'certificates' } 
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/cv/cv.module').then(m => m.CVModule),
    data: { animation: 'cv' } 
  },
  // {
  //   path: 'social',
  //   loadChildren: () => import('./social/social.module').then(m => m.SocialModule) 
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
