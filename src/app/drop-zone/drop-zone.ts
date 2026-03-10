import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-drop-zone',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './drop-zone.html',
  styleUrls: ['./drop-zone.css'],
})
export class DropZone {

// array med filer som andändaren släpper
  files: {
  file: File;
  addedAt: Date;
}[] = [];
// utan denna kdda funkar inte drag and drop
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    // hämtar filer från eventet
    const droppedFiles = event.dataTransfer?.files;
    if (!droppedFiles) return;
    // sparar filer i minnet så länge sidan är öppen
    for (let i = 0; i < droppedFiles.length; i++) {
      this.files.push({
  file: droppedFiles[i],
  addedAt: new Date()
});
    }
  }

// för att visa filstorlek
formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';

  const kB = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(kB));

  return parseFloat((bytes / Math.pow(kB, i)).toFixed(1)) + ' ' + sizes[i];
}
// ta bort fil från listan
removeFile(index: number) {
  this.files.splice(index, 1);
}

downloadFile(file: File): string {
  return URL.createObjectURL(file);
}

}


