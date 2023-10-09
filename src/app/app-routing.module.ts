import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { ProjectAComponent } from './project-a/project-a.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projectA', component: ProjectAComponent },
  { path: 'projectB', component: DetailProjectComponent },
  { path: 'projectC', component: DetailProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
