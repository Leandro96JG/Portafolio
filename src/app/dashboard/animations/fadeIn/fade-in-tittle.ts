import { animate, state, style, transition, trigger } from "@angular/animations";


export const fadeInTitle = trigger('fadeInTitle', [
  state('in', style({ opacity: 1 , transform: 'translateY(0)' })),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-40px)' }),
    animate('1000ms ease-out')
  ])
])

