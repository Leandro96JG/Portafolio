import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-button',
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent implements OnInit{



  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.loadTheme();
  }

  toogleTheme(){
    if(document.body.classList.contains('dark-mode')){
      this.themeService.disableDarkMode();
    }else{
      this.themeService.activeDarkMode();
    }
  }
}
