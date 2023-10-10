import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      title: 'Booki',
      description: 'Construction d’une rambarde pour un particulier.',
      logoUrl: '../../assets/images/project/Barriere/covers.jpg',
      imageUrl: '../../assets/images/project/Barriere/covers.jpg',
      tag: 'Espenel',
      page: 'projectA',
    },
    {
      id: 2,
      title: 'OhMyFood',
      description: 'Construction d’une véranda pour un particulier .',
      logoUrl: '../../assets/images/project/logo_ohmyfood.png',
      imageUrl: '../../assets/images/project/Veranda/covers.jpg',

      tag: 'Plein de Beaux',
      page: 'projectB',
    },
    {
      id: 3,
      title: 'La Panthère',
      description:
        'Participation en tant que constructeur métal pour la compagnie arc en ciel.',
      logoUrl: '../../assets/images/project/logo_laPanthere.svg',
      imageUrl: '../../assets/images/project/Chapiteau/covers.jpg',

      tag: 'Arles',
      page: 'projectC',
    },
  ];

  // pourra ensuite etre utilisé pour recuperer les projets sur le serveur
  getAllProjects(): Project[] {
    return this.projects;
  }
}
