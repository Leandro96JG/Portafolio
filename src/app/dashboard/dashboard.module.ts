import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavHeaderComponent,
    NotPageFoundComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }