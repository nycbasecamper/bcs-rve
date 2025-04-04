import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Person } from "../../models/Person";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule
]
})
export class FormComponent {
  @Output() editComment: EventEmitter<void> = new EventEmitter<void>();
  
  payer: Person = new Person();

  isEditing: { [key: string]: boolean } = {};

  setEditMode(field: string, editing: boolean) {
    this.isEditing[field] = editing;
  }

  onEditField(field: string) {
    console.log('Editing:', field);
    this.setEditMode(field, true);
    // optionally focus the field programmatically
  }

  onEditComment() {
    this.editComment.emit();
  }

  addDependent() {

  }

  onSubmit() {

  }
}