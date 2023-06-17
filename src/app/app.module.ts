import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { ExtraCuricularComponent } from './profile/extra-curicular/extra-curicular.component';
import { HeaderComponent } from './profile/header/header.component';
import { FooterComponent } from './profile/footer/footer.component';
import { IntroComponent } from './profile/intro/intro.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { ReferenceComponent } from './profile/reference/reference.component';
import { ScrollComponent } from './profile/scroll/scroll.component';
import { SkillsComponent } from './profile/skills/skills.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ExtraCuricularComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferenceComponent,
    ScrollComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
