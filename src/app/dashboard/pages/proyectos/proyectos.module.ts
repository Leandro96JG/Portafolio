import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { OneProyectComponent } from './pages/one-project/one-proyect.component';
import { TwoProyectComponent } from './pages/two-project/two-proyect.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { ThreeProjectComponent } from './pages/three-project/three-project.component';


@NgModule({
  declarations: [
    ProyectosComponent,
    OneProyectComponent,
    TwoProyectComponent,
    ThreeProjectComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
  ]
})
export class ProyectosModule { }
