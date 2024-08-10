import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {loginType} from './../Types/loginType'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public userData:loginType | null=null
  constructor(private http:HttpClient) { }
  url="http://localhost:3000";
  isUserLogin(username:string,password:string)
  {
    this.http.post(this.url.concat('/Login'),{nom:username,password:password}).subscribe(
      (response) => {
        this.userData=response as loginType;
        console.log('Utilisateur connecter avec  succès');
        return true;
      },
      (error: HttpErrorResponse) => {
        this.userData=null
        console.error('Error user Login:', error);
        return false;
      }
    );
    return false
  }
  CreateAccount()
  {
    
  }
}
