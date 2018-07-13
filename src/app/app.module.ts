import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

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
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

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
    ProfileSectionComponent,
    PopupDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupDialogComponent]
})
export class AppModule { }
