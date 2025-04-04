import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      provideHttpClient(),
      provideAnimations(),
      provideToastr({ timeOut: 5000, positionClass: 'toast-top-right' }),
    ]
  }).catch((err) => console.error(err));
