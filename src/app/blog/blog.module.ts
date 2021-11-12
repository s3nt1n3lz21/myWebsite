import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { BlogComponent } from './Blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {
  constructor(private route: ActivatedRoute) {}
}