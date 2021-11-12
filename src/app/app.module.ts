import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { MatGridListModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { AboutResolverService } from './about/about-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    HeaderComponent,
    BlogComponent,
    SocialComponent,
    FooterComponent
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
    // MatGridListModule,
  ],
  providers: [AboutResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
