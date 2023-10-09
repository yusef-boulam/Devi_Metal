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
      externalUrl:
        'https://yusef-boulam.github.io/Transformez_une_maquette_en_site_web_avec_HTML_-_CSS_Boulam_Yusef/',
      tag: 'Espenel',
      page: 'projectA',
    },
    {
      id: 2,
      title: 'OhMyFood',
      description: 'Construction d’une véranda pour un particulier .',
      logoUrl: '../../assets/images/project/logo_ohmyfood.png',
      imageUrl: '../../assets/images/project/Veranda/covers.jpg',
      externalUrl:
        'https://yusef-boulam.github.io/Dynamisez_une_page_web_avec_des_animations_CSS_Yusef_Boulam/',
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
      externalUrl:
        'https://yusef-boulam.github.io/Nouvelle_version_optimisez_un_site_web_existant-ACCESSIBILITE-SEO/index.html',
      tag: 'Arles',
      page: 'projectC',
    },
  ];

  // pourra ensuite etre utilisé pour recuperer les projets sur le serveur
  getAllProjects(): Project[] {
    return this.projects;
  }
}
