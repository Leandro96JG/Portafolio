import { animate, state, style, transition, trigger } from "@angular/animations";


export const rotateImg = trigger('rotateImage', [
  state('in', style({ transform: 'rotateY(0deg)', })), // Estado final sin rotación
  transition(':enter', [
    style({ transform: 'rotateY(360deg)' }), // Comienza rotada 360 grados
    animate('1200ms ease-out') // Duración de la animación
  ])
])


