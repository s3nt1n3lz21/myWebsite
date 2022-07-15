import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutResolverService } from './pages/about/about-resolver.service';
import { SocialResolverService } from './pages/social/social-resolver.service';
import { PortfolioResolverService } from './pages/portfolio/portfolio-resolver.service';
import { BlogResolverService } from './pages/blog/blog-resolver.service';
import { ServicesResolverService } from './pages/services/services-resolver.service';
import { EducationComponent } from './components/education/education.component';
import { AwardComponent } from './components/award/award.component';

@NgModule({
  declarations: [
    // Layout
    AppComponent,
    HeaderComponent,
    FooterComponent,

    // Pages
    HomeComponent,


    // Components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    MatSliderModule,
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AboutResolverService,
    SocialResolverService,
    PortfolioResolverService,
    BlogResolverService,
    ServicesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
