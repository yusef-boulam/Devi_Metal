import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor() {}
  picture: string = '../../assets/images/HomePage/soud3.jpg';
  title: string = 'Pour donner vie à vos projets !';
  description: string = 'Cliquez sur les projets pour voir toutes les photos';
  titleSkils: string = 'Compétences:';
  skilsFront: string = 'HTML, CSS, JavaScript, TypeScript, React, Angular';
  skilsBack: string = 'NodeJS, ExpressJS, MongoDB';
  skilsTools: string = 'Git, GitHub, Postman';
  titlePerfecting: string = 'En perfectionnement:';
  perfecting: string = 'Angular, JAVA, Spring Boot, SQL, Agile, Anglais B2';
  button: string = 'Voir mes projets';
  ngOnInit(): void {}
}
