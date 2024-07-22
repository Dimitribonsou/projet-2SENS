import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    title:'Home page',
    loadComponent:()=>import('./Pages/home-page/home-page.component')
  }
];
