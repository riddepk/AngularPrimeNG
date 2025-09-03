import { Routes } from '@angular/router';

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
    loadComponent: () => import("./features/auth/pages/register/register").then(m => m.Register),

  },
  {
    path: 'login',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/login/login").then(m => m.Login),

  },
  {
    path: 'maisons',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/maisons/maisons").then(m => m.Maisons),
  },
  {
    path: 'maisons-detail/:username',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/maisons-detail/maisons-detail").then(m => m.MaisonsDetail),
  },
    {
    path: 'create-house',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/create-house/create-house").then(m => m.CreateHouse),
  },
];
