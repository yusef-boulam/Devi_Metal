import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../services/projects.service';
import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss'],
})
export class DetailProjectComponent {
  project!: Project;
  images!: { src: string; alt: string }[];

  constructor(
    private ProjectsService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  // recupere l'id du projet dans l'url
  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['id'];
    this.project = this.ProjectsService.getProjectById(projectId);
    this.images = this.project.images;
  }

  currentSlide = 0;

  previousSlide() {
    this.currentSlide =
      this.currentSlide > 0 ? this.currentSlide - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide < this.images.length - 1 ? this.currentSlide + 1 : 0;
  }
}
