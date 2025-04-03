import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    standalone: true,
    imports: [
      CommonModule,
      MatSidenavModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatRadioModule,
      MatButtonModule,
      MatDividerModule,
      NavComponent
  ]
})
export class MainComponent {
  isLeftDockPinned: boolean = true;

  @ViewChild('drawercontent') drawercontent!: ElementRef;

  dependents: any;

  constructor() {}

  onNavPinToggled(value: boolean) {
    this.isLeftDockPinned = value;
  }

  // onToolsLoaded() {
  //   this.configureToolsSplitter();
  // }

  // onToolsPinToggled(value: boolean) {
  //   if(value) {
  //     this.configureToolsSplitter();
  //   }
  // }

  // onTabSelected(tab: ToolTab) {
  //   let verse = this.tabManager.chapterTab.activeVerse;
  //   this.updateTool(verse);
  // }

  // toolTabClicked(tab: ToolTab) {
  //   this.toolsManager.tabs.forEach((t) => {
  //     if(tab.text === t.text) {
  //       t.zindex += 10;
  //     } else {
  //       t.zindex = t.zdefault;
  //     }
  //   });

  //   this.toolsManager.setActiveTab(tab);
  //   this.tabManager.setActiveToolTab(this.tabManager.activeTab, tab);

  //   let verse = this.tabManager.chapterTab.activeVerse;
  //   this.updateTool(verse);
  // }

  addDependent() {

  }

  onSubmit() {

  }
}
