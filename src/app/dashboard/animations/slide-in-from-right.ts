import { trigger, state, style, transition, animate } from "@angular/animations";


export const slideInFromRight = trigger('slideInFromRight', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%)' }), // Comienza desde la derecha
    animate('1000ms ease-out')
  ])
])

