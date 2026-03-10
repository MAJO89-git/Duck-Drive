import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButton } from '../menu-button/menu-button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuButton, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
menuGroups = [
  {
    items: [
      { text: 'Startsida', icon: 'home' },
      { text: 'Min enhet', icon: 'folder' },
      { text: 'Datorer', icon: 'computer' },
    ]
  },
  {
    items: [
      { text: 'Delat med mig', icon: 'people' },
      { text: 'Senaste', icon: 'schedule' },
      { text: 'Stjärnmärkt', icon: 'star' },
    ]
  },
  {
    items: [
      { text: 'Skräppost', icon: 'error' },
      { text: 'Papperskorgen', icon: 'delete' },
      { text: 'Lagring', icon: 'cloud' },
    ]
  }
];
}