import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeInTitle } from '../../animations/fadeIn/fade-in-tittle';
import { rotateImg } from '../../animations/rotateImage';
import { slideInFromRight } from '../../animations/slide-in-from-right';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
  animations:[
    slideInFromRight,
    rotateImg,
    fadeInTitle,
  ]
})
export class SobreMiComponent {

}
