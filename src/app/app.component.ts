import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      HeaderComponent,
      MainComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bcs-rve-web';
}
