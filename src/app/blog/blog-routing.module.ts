import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogResolverService } from './blog-resolver.service';
import { BlogComponent } from './Blog.component';


const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    resolve: {
      customer: BlogResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
