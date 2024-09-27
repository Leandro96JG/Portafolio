import { trigger, transition, style, animateChild, animate, query, group } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations:[
    trigger('routeAnimations', [

      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }),
            animate('300ms ease-in', style({ opacity: 1 }))
          ], { optional: true }),
          query('@*', animateChild(), { optional: true })  // Permite que las animaciones hijas ocurran al mismo tiempo
        ])
      ])
    ])
  ]
})
export class LayoutComponent {
  contexts = inject(ChildrenOutletContexts)

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];  }

}
