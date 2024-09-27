import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInFromRight } from '../../animations/slide-in-from-right';
import { fadeInTitle } from '../../animations/fadeIn/fade-in-tittle';
import { fadeInTitle2 } from '../../animations/fadeIn/fade-in-tittle2';
import { fadeInTitle3 } from '../../animations/fadeIn/fade-in-tittle3';
import { fadeInTitle4 } from '../../animations/fadeIn/fade-in-tittle4';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  animations:[
    fadeInTitle,
    fadeInTitle2,
    fadeInTitle3,
    fadeInTitle4,
    trigger('routeAnimations', [

      transition('* <=> *', [
         style({ opacity: 0 }), // Estado inicial: invisible
        animate('300ms ease-in', style({ opacity: 1 })) // Transición: fade in en 500ms
      ]),
    ])
  ]
})
export class ProyectosComponent {
  contexts = inject(ChildrenOutletContexts)

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];  }
}
