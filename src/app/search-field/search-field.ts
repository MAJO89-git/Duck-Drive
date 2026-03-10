import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-field.html',
  styleUrls: ['./search-field.css'],
})
export class SearchField {

  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

}