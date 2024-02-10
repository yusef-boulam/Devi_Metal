import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';

const routes: Routes = [
  // { path: 'project/:id', component: DetailProjectComponent },
  { path: '', component: HomePageComponent },
  { path: 'project/:id', component: ProjectOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
