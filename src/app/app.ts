import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from './sidebar/sidebar';
import { FileView } from './file-view/file-view';
import { SearchField } from './search-field/search-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, FileView],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  // behövs för att blokera webbläsaren att öppnar filer
  @HostListener('document:dragover', ['$event'])
  onDocumentDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('document:drop', ['$event'])
  onDocumentDrop(event: DragEvent) {
    event.preventDefault();
  }
}