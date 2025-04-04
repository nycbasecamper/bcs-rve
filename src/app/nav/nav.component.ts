import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class NavComponent {
  @Input() isPinned: boolean = false;

  @Output() pinToggled = new EventEmitter<boolean>();
  @Output() fileSelected = new EventEmitter<File>();

  constructor() {}

  onPinClick(value: boolean) {
    this.pinToggled.emit(value);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileSelected.emit(file);
    }
  }
}
