import { Routes } from '@angular/router';
import {AddHouseComponent} from './features/auth/pages/add-house/add-house';

export const routes: Routes = [
      {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/home/pages/home/home").then(m => m.Home),

    },
  {
    path: 'register',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/register/register").then(m => m.RegisterComponent),

  },
  {
    path: 'login',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/login/login").then(m => m.LoginComponent),

  },
  {
    path: 'maisons',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/list-maisons/list-maisons").then(m => m.ListMaisonsComponent),
  },
  {
    path: 'arduinosensors/:username',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/arduinosensor/arduinosensor").then(m => m.ArduinoSensorComponent),
  },
    {
    path: 'add-house',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/add-house/add-house").then(m => m.AddHouseComponent),
  },
  {
  path: 'list-users',
  // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
  loadComponent: () => import("./features/auth/pages/list-users/list-users").then(m => m.ListUsersComponent),
  },
];
