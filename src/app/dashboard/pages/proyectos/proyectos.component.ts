import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  animations:[
    trigger('routeAnimations', [

      transition('* <=> *', [
        style({position: 'relative'}),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ],
          {optional: true},
        ),
        query(':enter', [style({left: '-100%'})], {optional: true}),
        query(':leave', animateChild(), {optional: true}),
        group([
          query(':leave', [animate('200ms ease-out', style({left: '100%', opacity: 0}))], {
            optional: true,
          }),
          query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
          query('@*', animateChild(), {optional: true}),
        ]),
      ]),
    ])
  ]
})
export class ProyectosComponent {
  contexts = inject(ChildrenOutletContexts)

  prepareRoute() {
    console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']);
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];  }
}
