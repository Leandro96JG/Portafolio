import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { OneProyectComponent } from './pages/one-project/one-proyect.component';
import { TwoProyectComponent } from './pages/two-project/two-proyect.component';
import { AppRoutingModule } from '../../../app-routing.module';


@NgModule({
  declarations: [
    ProyectosComponent,
    OneProyectComponent,
    TwoProyectComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
  ]
})
export class ProyectosModule { }
