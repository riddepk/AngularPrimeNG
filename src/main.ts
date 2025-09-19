import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Si nécessaire
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
