import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidbarComponent,
    FooterComponent,
    AboutMeComponent,
    MyEducationComponent,
    MyPortfolioComponent,
    ContactMeComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
