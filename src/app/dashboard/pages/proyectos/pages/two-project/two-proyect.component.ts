import { Component } from '@angular/core';
import { rotateImg } from '../../../../animations/rotateImage';

@Component({
  selector: 'app-two-proyect',
  templateUrl: './two-proyect.component.html',
  styleUrl: './two-proyect.component.css',
  animations:[
    rotateImg,
  ]
})
export class TwoProyectComponent {

}
