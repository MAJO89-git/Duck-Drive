import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu-button.html',
  styleUrls: ['./menu-button.css']
})
export class MenuButton {
  @Input() text!: string;
  @Input() icon?: string;
}