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
      urlImages:'../../../../assets/icons/html5-without-wordmark-color-seeklogo.svg',
      name:'Html',
    },
    {
      urlImages:'../../../../assets/icons/css-3-seeklogo.svg',
      name:'Css',
    },
    {
      urlImages:'../../../../assets/icons/javascript-js-seeklogo.svg',
      name:'JavaScript',
    },
    {
      urlImages:'../../../../assets/icons/typescript-seeklogo.svg',
      name:'TypeScript',
    },
    {
      urlImages:'../../../../assets/icons/angular.svg',
      name:'Angular',
    },
    {
      urlImages:'../../../../assets/icons/material-ui-seeklogo.svg',
      name:'Material UI',
    },
    {
      urlImages:'../../../../assets/icons/bootstrap-5-seeklogo.svg',
      name:'Bootstrap',
    },
    {
      urlImages:'../../../../assets/icons/tailwind-css-seeklogo.svg',
      name:'Tailwind',
    },
    {
      urlImages:'../../../../assets/icons/java-seeklogo.svg',
      name:'Java',
    },
    {
      urlImages:'../../../../assets/icons/spring-boot-seeklogo.svg',
      name:'Spring Boot',
    },
    {
      urlImages:'../../../../assets/icons/mysql-seeklogo.svg',
      name:'MySQL',
    },
    {
      urlImages:'../../../../assets/icons/jwt-seeklogo.svg',
      name:'JWT',
    },
    {
      urlImages:'../../../../assets/icons/git-seeklogo.svg',
      name:'Git',
    },
    {
      urlImages:'../../../../assets/icons/icons8-github.svg',
      name:'GitHub',
    },
  ]



}
