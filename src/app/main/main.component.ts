import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
  ]
})
export class MainComponent {
  isLeftDockPinned: boolean = true;
  isDragging: boolean = false;
  
  booksSplitter?: HTMLElement;
  toolsSplitter?: HTMLElement;

  @ViewChild('drawercontent') drawercontent!: ElementRef;

  constructor() {}

  onBooksPinToggled(value: boolean) {
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


  // configureToolsSplitter() {
  //   setTimeout(() => {
  //     if(!this.tabManager.isHomeTabActive) {
  //       this.toolsSplitter = document.querySelector('#vb-tools-splitter') as HTMLElement;
  //       const tabContent = document.querySelector('.vb-content-col') as HTMLElement;
  //       const toolsMenu = document.querySelector('.vb-tools-col') as HTMLElement;
  //       const mainContent = document.querySelector('#vb-main') as HTMLElement;
    
  //       const mousedown = (e: any) => {
  //         e.preventDefault(); // prevent text selection
  //         this.isDragging = true;
  //         document.body.style.cursor = 'col-resize';
  //       };
        
  //       const mousemove = (e: any) => {
  //         if (!this.isDragging) return;
        
  //         const newWidth = window.innerWidth - e.clientX; // Measure width from the right edge
    
  //         if (newWidth > 200 && newWidth < 650) {
  //           // tabContent.style.flex = `0 0 0`;
  //           toolsMenu.style.flex = `0 0 ${newWidth}px`; // Update flex-basis dynamically
  //           mainContent.style.flex = `1`;

  //           let interlinearTab: InterlinearTab = this.toolsManager.interlinearTab;

  //           if(newWidth > 450 && interlinearTab) {
  //             interlinearTab.isVertical = false;
  //           } else if(newWidth > 225 && interlinearTab) {
  //             interlinearTab.isVertical = true;
  //           }
  //         }
  //       };
  
  //       const mouseup = (e: any) => {
  //         this.isDragging = false;
  //         document.body.style.cursor = 'default';
    
  //         // this.booksSplitter!.removeEventListener('mousedown', mousedown);
  //         // document.removeEventListener('mousemove', mousemove);
  //         // document.removeEventListener('mouseup', mouseup);
  //       };
  
  //       this.toolsSplitter.addEventListener('mousedown', mousedown);
  //       document.addEventListener('mousemove', mousemove);
  //       document.addEventListener('mouseup', mouseup);
  //     }
  //   }, 250);
  // }
}
