import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../services/projects.service';
import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss'],
})
export class ProjectOverviewComponent {
  project!: Project;
  images!: { src: string; alt: string }[];

  constructor(
    private ProjectsService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['id'];
    this.project = this.ProjectsService.getProjectById(projectId);
    this.images = this.project.images;
    // je veux afficher les images
  }
}
