import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NavComponent } from '../nav/nav.component';
import { Person } from '../../models/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    NavComponent,
    FormComponent
]
})
export class MainComponent {
  isLeftDockPinned: boolean = true;

  payer: Person = new Person();

  OPENAPI_KEY: string = '';
  ASSISTANT_ID: string = '';

  constructor(private http: HttpClient) {
    this.payer.taxYearStart = "1/2024";
    this.payer.taxYearEnd = "12/2024";
    this.payer.firstName = "John";
  }

  onNavPinToggled(value: boolean) {
    this.isLeftDockPinned = value;
  }

  onFileSelected(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('purpose', 'assistants');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`
    });

    this.http.post<any>('https://api.openai.com/v1/files', formData, { headers }).subscribe({
      next: (res) => {
        const fileId = res.id;
        this.createThreadAndSendMessage(fileId);
      },
      error: (err) => console.error('Upload error:', err),
    });
  }

  createThreadAndSendMessage(fileId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'assistants=v2'
    });

    this.http.post<any>('https://api.openai.com/v1/threads', {}, { headers }).subscribe({
      next: (thread) => {
        this.sendMessage(thread.id, fileId);
      },
      error: (err) => console.error('Thread creation error:', err),
    });
  }

  sendMessage(threadId: string, fileId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'assistants=v2'
    });

    const body = {
      role: 'user',
      content: 'Read the values in the input fields of the attached file and return those values in json format with fields "taxYearStart", "taxYearEnd", "firstName", "lastName".',
      file_ids: [`${fileId}`]
    };

    this.http.post<any>(`https://api.openai.com/v1/threads/${threadId}/messages`, body, { headers }).subscribe({
      next: () => this.runAssistant(threadId),
      error: (err) => console.error('Message send error:', err),
    });
  }

  runAssistant(threadId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`,
      'Content-Type': 'application/json'
    });

    const body = {
      assistant_id: this.ASSISTANT_ID,
      thread_id: threadId,
    };

    this.http.post<any>('https://api.openai.com/v1/threads/runs', body, { headers }).subscribe({
      next: (res) => {
        this.pollForCompletion(res.id, threadId, res.id);
      },
      error: (err) => console.error('Run error:', err),
    });
  }

  pollForCompletion(resId: string, threadId: string, runId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`
    });

    const interval = setInterval(() => {
      this.http.get<any>(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, { headers }).subscribe({
        next: (res) => {
          if (res.status === 'completed') {
            clearInterval(interval);
            this.fetchResponse(threadId);
          } else if (res.status === 'failed') {
            clearInterval(interval);
          }
        },
        error: (err) => console.error('Polling error:', err),
      });
    }, 2000);
  }

  fetchResponse(threadId: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.OPENAPI_KEY}`
    });

    this.http.get<any>(`https://api.openai.com/v1/threads/${threadId}/messages`, { headers }).subscribe({
      next: (res) => {
        const content = res.data[0].content[0].text.value;
        console.log(content);
      },
      error: (err) => console.error('Fetch response error:', err),
    });
  }
}
