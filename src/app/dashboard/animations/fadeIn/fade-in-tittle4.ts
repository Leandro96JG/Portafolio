import { animate, state, style, transition, trigger } from "@angular/animations";


export const fadeInTitle4 = trigger('fadeInTitle4', [
  state('in', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-40px)' }),
    animate('1600ms ease-out')
  ])
])
