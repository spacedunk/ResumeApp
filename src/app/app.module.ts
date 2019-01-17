import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserResume } from 'src/UserResume';
import { UserInfoComponent } from './user-info/user-info.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { SkillInfoComponent } from './skill-info/skill-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SchoolInfoComponent,
    ExperienceInfoComponent,
    ProjectInfoComponent,
    SkillInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
