import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = 'dark-mode';

  darkIsActive:boolean = false;

  constructor() { }

  activeDarkMode(){
    document.body.classList.add(this.darkMode);
    localStorage.setItem('theme', 'dark');
  }
  disableDarkMode(){
    document.body.classList.remove(this.darkMode);
    localStorage.setItem('theme','light');
  }

  loadTheme(){
    const theme = localStorage.getItem('theme');
    if(theme == null ||theme === 'dark'){
      this.activeDarkMode();
      this.darkIsActive =true;
    }else{
      this.disableDarkMode();
      this.darkIsActive = false;
    }
  }
}
