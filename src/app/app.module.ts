import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ProfExpSectionComponent } from './prof-exp-section/prof-exp-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ProfExpSectionComponent,
    SkillsSectionComponent,
    ContactMeSectionComponent,
    EducationSectionComponent,
    TestimonialsSectionComponent,
    FooterSectionComponent,
    IntroSectionComponent,
    ProfileSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
