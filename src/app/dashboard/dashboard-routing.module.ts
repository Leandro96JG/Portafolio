import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent,
      },
      {
        path:'about-me',
        component:SobreMiComponent,
      },
      {
        path:'proyectos',
        loadChildren:()=>import('./pages/proyectos/proyectos.module').then(m=>m.ProyectosModule),
      },
      {
        path:'tecnologías',
        component:TecnologiasComponent,
      },
      {
        path:'**',
        redirectTo:'home',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
