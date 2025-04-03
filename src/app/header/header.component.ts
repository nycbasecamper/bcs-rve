import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HeaderComponent {
  constructor(private toastr: ToastrService) {}

  save() {
    this.showToast("RVE", "Form Saved!");
  }

  calculate() {
    this.showToast("RVE", "Calculating...");
  }

  showToast(title: string, body: string) {
    this.toastr.success(body, title, {
      timeOut: 2000,
      extendedTimeOut: 2000,
      closeButton: true,
      progressBar: true,
      tapToDismiss: true,
      enableHtml: true
    });
  }
}
