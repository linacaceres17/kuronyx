import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;
  themeMode: 'dark' | 'light' = 'dark';

  constructor() {
    this.applyTheme();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.themeMode = this.themeMode === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('light-theme', this.themeMode === 'light');
  }
}


