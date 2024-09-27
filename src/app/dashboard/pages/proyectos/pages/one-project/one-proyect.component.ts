import { Component } from '@angular/core';
import { fadeInTitle3 } from '../../../../animations/fadeIn/fade-in-tittle3';
import { rotateImg } from '../../../../animations/rotateImage';

@Component({
  selector: 'app-one-proyect',
  templateUrl: './one-proyect.component.html',
  styleUrl: './one-proyect.component.css',
  animations:[
    fadeInTitle3,
    rotateImg,
  ]
})
export class OneProyectComponent {

}
