import { Component } from '@angular/core';

@Component({
  selector: 'app-project-a',
  templateUrl: './project-a.component.html',
  styleUrls: ['./project-a.component.scss'],
})
export class ProjectAComponent {
  constructor() {}

  ngOnInit(): void {}

  picture: string = '../../assets/images/project/Barriere/covers.jpg';
}
