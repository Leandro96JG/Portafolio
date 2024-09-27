import { Component } from '@angular/core';
import { fadeInTitle } from '../../animations/fadeIn/fade-in-tittle';
import { fadeInTitle2 } from '../../animations/fadeIn/fade-in-tittle2';
import { fadeInTitle3 } from '../../animations/fadeIn/fade-in-tittle3';
import { rotateImg } from '../../animations/rotateImage';



@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css',
  animations:[
    fadeInTitle,
    fadeInTitle2,
    fadeInTitle3,
  ]
})
export class TecnologiasComponent {



}
