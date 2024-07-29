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
    loadComponent:()=>import('./Pages/question-public/question-public.component'),
    children:[
      {
        path:'signaler',
        title:"signaler une question",
        loadComponent:()=>import('./Components/QuestionsComponents/signaler-question/signaler-question.component')
      },
      {
        path:'reponses',
        title:"Reponse des questions",
        loadComponent:()=>import('./Components/QuestionsComponents/reponse-question/reponse-question.component')
      }
    ]

  },
  {
    path:'signaler',
    title:"signaler une question",
    loadComponent:()=>import('./Components/QuestionsComponents/signaler-question/signaler-question.component')
  },
  {
    path:'reponses',
    title:"Reponse des questions",
    loadComponent:()=>import('./Components/QuestionsComponents/reponse-question/reponse-question.component')
  },
  {
    path:'discutions',
    title:'Listes des Discutions',
    loadComponent:()=>import('./Pages/discutions/discutions.component')
  },
  {
    path:'**',
    title:'Page introuvable',
    loadComponent:()=>import('./Components/notfound/notfound.component')
  }
];
