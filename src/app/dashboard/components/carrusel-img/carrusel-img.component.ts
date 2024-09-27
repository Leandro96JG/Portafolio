import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface images{
  urlImages:string,
  name:string
 }

@Component({
  selector: 'carrusel-img',
  templateUrl: './carrusel-img.component.html',
  styleUrl: './carrusel-img.component.css'
})
export class CarruselImgComponent{
  images:images[]=[
    {
      urlImages:'icons/html.svg',
      name:'Html',
    },
    {
      urlImages:'icons/css.svg',
      name:'Css',
    },
    {
      urlImages:'icons/js.svg',
      name:'JavaScript',
    },
    {
      urlImages:'icons/ts.svg',
      name:'TypeScript',
    },
    {
      urlImages:'icons/angular.svg',
      name:'Angular',
    },
    {
      urlImages:'icons/material.svg',
      name:'Material UI',
    },
    {
      urlImages:'icons/bootstrap.svg',
      name:'Bootstrap',
    },
    {
      urlImages:'icons/tailwind.svg',
      name:'Tailwind',
    },
    {
      urlImages:'icons/java.svg',
      name:'Java',
    },
    {
      urlImages:'icons/spring.svg',
      name:'Spring Boot',
    },
    {
      urlImages:'icons/mysql.svg',
      name:'MySQL',
    },
    {
      urlImages:'icons/jwt.svg',
      name:'JWT',
    },
    {
      urlImages:'icons/git.svg',
      name:'Git',
    },
    {
      urlImages:'icons/github.svg',
      name:'GitHub',
    },
  ]



}
