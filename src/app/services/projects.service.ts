import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      title: 'Barriere',
      description: 'Garde Corps',
      logoUrl: '../../assets/images/project/Barriere/covers.jpg',
      imageUrl: '../../assets/images/project/Barriere/covers.jpg',
      tag: 'Espenel',
      page: 'projectA',
      images: [
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
      ],
    },
    {
      id: 2,
      title: 'Veranda',
      description: 'Veranda',
      logoUrl: '../../assets/images/project/logo_ohmyfood.png',
      imageUrl: '../../assets/images/project/Veranda/covers.jpg',

      tag: 'Plein de Beaux',
      page: 'projectB',
      images: [
        {
          src: '../../assets/images/project/Veranda/covers.jpg',
          alt: 'photo veranda',
        },
        {
          src: '../../assets/images/project/Veranda/Photo 1.jpg',
          alt: 'photo veranda',
        },
        {
          src: '../../assets/images/project/Veranda/photo 2.jpg',
          alt: 'photo veranda',
        },

        // ... autres images
      ],
    },
    {
      id: 3,
      title: 'Formation',
      description: 'Industrie',
      logoUrl: '../../assets/images/project/Barriere/covers.jpg',
      imageUrl: '../../assets/images/project/Formation/1.jpg',
      tag: 'AFPA',
      page: 'projectA',
      images: [
        {
          src: '../../assets/images/project/Formation/1.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/2.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/3.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/4.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/5.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/6.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/7.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/8.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/9.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/10.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/11.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/12.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/13.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/14.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/15.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/16.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/17.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/18.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/19.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/20.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/21.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/22.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/23.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/24.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/25.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/26.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/27.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/28.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/29.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/30.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/31.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/32.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/33.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/34.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/35.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/36.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/37.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/38.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/39.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/40.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/41.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/42.jpg',
          alt: 'photo formation',
        },
        {
          src: '../../assets/images/project/Formation/43.jpg',
          alt: 'photo formation',
        },

        // ... autres images
      ],
    },
    {
      id: 4,
      title: 'Chapiteau',
      description: 'Evenementiel',
      logoUrl: '../../assets/images/project/logo_laPanthere.svg',
      imageUrl: '../../assets/images/project/Chapiteau/covers.jpg',

      tag: 'Arles',
      page: 'projectC',
      images: [
        {
          src: '../../assets/images/project/Chapiteau/covers.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/2.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/6.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/7.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/8.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/9.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/11.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/13.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/14.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/15.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/16.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/17.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/18.jpg',
          alt: 'photo chapiteau',
        },

        {
          src: '../../assets/images/project/Chapiteau/19.jpg',
          alt: 'photo chapiteau',
        },

        {
          src: '../../assets/images/project/Chapiteau/20.jpg',
          alt: 'photo chapiteau',
        },

        {
          src: '../../assets/images/project/Chapiteau/21.jpg',
          alt: 'photo chapiteau',
        },

        {
          src: '../../assets/images/project/Chapiteau/22.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/24.jpg',
          alt: 'photo chapiteau',
        },

        {
          src: '../../assets/images/project/Chapiteau/25.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/26.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/27.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/28.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/29.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/30.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/32.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/33.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/34.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/35.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/37.jpg',
          alt: 'photo chapiteau',
        },
        {
          src: '../../assets/images/project/Chapiteau/38.jpg',
          alt: 'photo chapiteau',
        },
      ],
    },
  ];

  // pourra ensuite etre utilisé pour recuperer les projets sur le serveur
  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project {
    return this.projects.find((project) => project.id === id)!;
  }
}
