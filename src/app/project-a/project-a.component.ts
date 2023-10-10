import { Component } from '@angular/core';

@Component({
  selector: 'app-project-a',
  templateUrl: './project-a.component.html',
  styleUrls: ['./project-a.component.scss'],
})
export class ProjectAComponent {
  currentSlide = 0;
  images = [
    {
      src: '../../assets/images/project/Barriere/covers.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/1.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/2.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/3.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/4.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/5.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/6.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/7.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/8.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/9.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/10.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/11.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/12.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/13.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/14.jpg',
      alt: 'photo barriere',
    },
    {
      src: '../../assets/images/project/Barriere/15.jpg',
      alt: 'photo barriere',
    },

    // ... autres images
  ];

  previousSlide() {
    this.currentSlide =
      this.currentSlide > 0 ? this.currentSlide - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide < this.images.length - 1 ? this.currentSlide + 1 : 0;
  }
}
