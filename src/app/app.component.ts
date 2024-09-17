import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, OutletContext, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
  ]
})
export class AppComponent {
  title = 'my-portafolio';

}
