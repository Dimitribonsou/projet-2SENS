import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000";
  AddAdresse(email:string)
  {
     this.http.post(this.url.concat('/Addnewsletter'),{email:email}).subscribe(
      (response) => {
        console.log('Adresse email ajoutée avec succès');
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding email:', error);
      }
    );
  }
  AddComment(nom:string,email:string,message:string):boolean
  {
     this.http.post(this.url.concat('/AddComment'),{
      nom:nom,
      email:email,
      message:message
    }).subscribe(
      (response) => {
        console.log('Commentaire ajoutée avec succès');
        return true;
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding comment:', error);
        return false ;
      }
    );
    return true;
  }
}
