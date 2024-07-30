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
    path:'about',
    title:'Apropos de nous',
    loadComponent:()=>import('./Pages/about-page/about-page.component')
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
    path:'login',
    title:"Connectez vous",
    loadComponent:()=>import('./Components/Authentification/login/login.component')
  },
  {
    path:'register',
    title:"Creer votre Compte",
    loadComponent:()=>import('./Components/Authentification/sign-up/sign-up.component')
  },
  {
    path:'register-consultant-personnal',
    title:"Creer votre Compte",
    loadComponent:()=>import('./Components/Authentification/sign-up-consultant1/sign-up-consultant1.component')
  },
  {
    path:'register-consultant-professionnel',
    title:"Creer votre Compte",
    loadComponent:()=>import('./Components/Authentification/sign-up-consultant2/sign-up-consultant2.component')
  },
  {
    path:'forgot-password',
    title:"Renitialiser votre mot de passe",
    loadComponent:()=>import('./Components/Authentification/forgot-password/forgot-password.component')
  },
  {
    path:'reponses',
    title:"Reponse des questions",
    loadComponent:()=>import('./Components/QuestionsComponents/reponse-question/reponse-question.component')
  },
  {
    path:'question-payment',
    title:"paiement pour question",
    loadComponent:()=>import('./Pages/payment-page/payment-page.component')
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
