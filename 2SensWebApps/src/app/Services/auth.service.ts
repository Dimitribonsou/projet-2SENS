import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {loginType} from './../Types/loginType'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public userData!:loginType
islogin!:boolean
  constructor(private http:HttpClient) { }
  url="http://localhost:3000";
  isUserLogin(email:string,password:string)
  {
    this.http.post(this.url.concat('/Login'),{email:email,password:password}).subscribe(
      (response) => {
        this.userData=response as loginType ;
        console.log("reponse retournee par le serveur : ",response)
      },
      (error: HttpErrorResponse) => {
        console.error('Error user Login:', error);
      }
    );
    //gerer le probleme de promesse pour terminer l'authentification
    if( this.userData.statut === true)
      {
          console.log('dimidev connecter avec  succès  : ',this.userData);
          return true;
      }
      else
      {
        console.log("Utilisateur non connecter !")
        return false
      }
  }
  CreateAccount(username:string,password:string,email:string,tel:string)
  {
    this.http.post(this.url.concat('/NewAccount'),{
      nom:username,
      password:password,
      email:email,
      telephone:tel
    }).subscribe(
      (response) => {
        console.log('Utilisateur enregistrer avec  succès');
      },
      (error: HttpErrorResponse) => {
        console.error('Error user reguster:', error);
      }
    );
  }
}
