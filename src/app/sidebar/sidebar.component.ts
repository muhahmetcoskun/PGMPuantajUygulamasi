import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule],
})
export class SidebarComponent {
  menuOpen = false;

  showFiller = false;
  onSettingsClick(): void {
    this.menuOpen = !this.menuOpen;
  }
}
