import { Router } from '@angular/router';
import { Project } from './../models/project.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}

  externalUrl!: string;
  title!: string;
  description!: string;
  logoUrl!: string;
  imageUrl!: string;
  tag!: string;
  page!: string;

  ngOnInit(): void {}

  onViewProject() {
    this.router.navigateByUrl('project/' + this.project.id);
  }
}
