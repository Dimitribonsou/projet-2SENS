import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {loginType} from './../Types/loginType'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public userData!:loginType
islogin:boolean =false
  constructor(private http:HttpClient,private router:Router) { }
  url="http://localhost:3000";
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  isUserLogin(email:string,password:string): Observable<loginType>
  {
     return this.http.post(this.url.concat('/Login'),{email:email,password:password}) as Observable<loginType>;
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
