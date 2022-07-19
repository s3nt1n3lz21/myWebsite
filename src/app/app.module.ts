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
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutResolverService } from './pages/about/about-resolver.service';
import { SocialResolverService } from './pages/social/social-resolver.service';
import { PortfolioResolverService } from './pages/portfolio/portfolio-resolver.service';
import { BlogResolverService } from './pages/blog/blog-resolver.service';
import { ServicesResolverService } from './pages/services/services-resolver.service';
import { HomeResolverService } from './pages/home/home-resolver.service';
import { EducationComponent } from './components/education/education.component';
import { AwardComponent } from './components/award/award.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from './shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RevealDirective } from './directives/reveal.directive';

@NgModule({
  declarations: [
    // Layout
    AppComponent,
    HeaderComponent,
    FooterComponent,

    // Pages

    SummaryComponent,


    // Components

    // Directives
  ],
  imports: [
    SharedModule,
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
    ServicesResolverService,
    HomeResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
