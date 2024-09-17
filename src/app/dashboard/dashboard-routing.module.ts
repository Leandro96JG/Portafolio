import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { animation } from '@angular/animations';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent,
        data:{animation:'home'}
      },
      {
        path:'about-me',
        component:SobreMiComponent,
        data:{animation:'about-me'}
      },
      {
        path:'proyectos',
        loadChildren:()=>import('./pages/proyectos/proyectos.module').then(m=>m.ProyectosModule),
        data:{animation:'projects'}
      },
      {
        path:'tecnologías',
        component:TecnologiasComponent,
        data:{animation:'tecnologías'}
      },
      {
        path:'contacto',
        component:ContactoComponent,
        data:{animation:'contacto'}
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
