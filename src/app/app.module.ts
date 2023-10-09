import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { ProjectAComponent } from './project-a/project-a.component';
import { ProjectBComponent } from './project-b/project-b.component';
import { ProjectCComponent } from './project-c/project-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    DetailProjectComponent,
    ProjectAComponent,
    ProjectBComponent,
    ProjectCComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
