import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    title:'Home page',
    loadComponent:()=>import('./Pages/home-page/home-page.component')
  },
  {
    path:'home',
    title:'Home page',
    loadComponent:()=>import('./Pages/home-page/home-page.component')
  },
  {
    path:'question',
    title:'Page des Questions',
    loadComponent:()=>import('./Pages/question-page/question-page.component')
  },
  {
    path:'questions',
    title:'Listes des Questions',
    loadComponent:()=>import('./Pages/question-public/question-public.component')
  },
  {
    path:'**',
    title:'Page introuvable',
    loadComponent:()=>import('./Components/notfound/notfound.component')
  }
];
