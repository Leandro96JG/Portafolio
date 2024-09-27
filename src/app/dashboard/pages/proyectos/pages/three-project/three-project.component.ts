import { Component } from '@angular/core';
import { rotateImg } from '../../../../animations/rotateImage';

@Component({
  selector: 'app-three-project',
  templateUrl: './three-project.component.html',
  styleUrl: './three-project.component.css',
  animations:[
    rotateImg,
  ]
})
export class ThreeProjectComponent {

}
