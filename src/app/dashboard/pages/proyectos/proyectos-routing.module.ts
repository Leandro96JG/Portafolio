import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { OneProyectComponent } from './pages/one-project/one-proyect.component';
import { TwoProyectComponent } from './pages/two-project/two-proyect.component';
import { ThreeProjectComponent } from './pages/three-project/three-project.component';

const routes: Routes = [
  {
    path:'',
    component:ProyectosComponent,
    children:[
      {
        path:'one',
        component:OneProyectComponent,
        data:{animation:'one'}

      },
      {
        path:'two',
        component:TwoProyectComponent,
        data:{animation:'two'}

      },
      {
        path:'three',
        component:ThreeProjectComponent,
        data:{animation:'three'}

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
