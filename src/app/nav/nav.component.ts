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

  constructor() {}

  onPinClick(value: boolean) {
    this.pinToggled.emit(value);
  }
}
