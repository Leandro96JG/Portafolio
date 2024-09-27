import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { rotateImg } from '../../animations/rotateImage';
import { fadeInTitle } from '../../animations/fadeIn/fade-in-tittle';
import { fadeInTitle2 } from '../../animations/fadeIn/fade-in-tittle2';
import { fadeInTitle3 } from '../../animations/fadeIn/fade-in-tittle3';
import { fadeInTitle4 } from '../../animations/fadeIn/fade-in-tittle4';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations:[
    fadeInTitle,
    fadeInTitle2,
    fadeInTitle3,
    fadeInTitle4,
    rotateImg,
  ],
})
export class HomePageComponent {

}
