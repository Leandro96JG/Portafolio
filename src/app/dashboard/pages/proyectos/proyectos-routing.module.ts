import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { OneProyectComponent } from './pages/one-project/one-proyect.component';
import { TwoProyectComponent } from './pages/two-project/two-proyect.component';

const routes: Routes = [
  {
    path:'',
    component:ProyectosComponent,
    children:[
      {
        path:'one',
        component:OneProyectComponent,
      },
      {
        path:'two',
        component:TwoProyectComponent,
      },
      {
        path:'**',
        redirectTo:'one',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
