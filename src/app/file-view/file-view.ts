import { Component } from '@angular/core';
import { SearchField } from '../search-field/search-field';
import { DropZone } from '../drop-zone/drop-zone';



@Component({
  selector: 'app-file-view',
  standalone: true,
  templateUrl: './file-view.html',
  styleUrls: ['./file-view.css'],
  imports:[SearchField,DropZone],
})
export class FileView {
  onSearch(query: string) {
  console.log('Söker efter:', query);
  }
}
