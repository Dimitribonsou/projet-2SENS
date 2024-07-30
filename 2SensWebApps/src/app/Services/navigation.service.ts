import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  public IsnavActive=true;
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    // Vérifier si la route actuelle est une sous-route de 'questions'
    if (state.url.startsWith('/reponses')) {
      // Si oui, ne pas afficher le navbar
      return true;
    }
    // Sinon, afficher le navbar
    return true;
  }
  showNabarComponent(statut:boolean):boolean
  {

     if(statut==true)
     {
        return true;
     }
     else
     {
        this.IsnavActive=false;
       return false;
     }
  }
}
