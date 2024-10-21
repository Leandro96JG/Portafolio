import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarruselImgComponent } from './components/carrusel-img/carrusel-img.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavHeaderComponent,
    NotPageFoundComponent,
    HomePageComponent,
    SobreMiComponent,
    TecnologiasComponent,
    ContactoComponent,
    CarruselImgComponent,
    ThemeButtonComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
