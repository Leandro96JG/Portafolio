import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NotPageFoundComponent } from './dashboard/pages/not-page-found/not-page-found.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),data: { animation: 'dashboard' },
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full',

  },
  {
    path:'**',
    component:NotPageFoundComponent,
    data:{animation: 'notPageFound'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
