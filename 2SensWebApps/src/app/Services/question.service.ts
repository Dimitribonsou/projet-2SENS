import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000";
  AddQuestion(titre:string,description:string)
  {
     this.http.post(this.url.concat('/NewQuestion'),{
      titre:titre,
      description:description
    }).subscribe(
      (response) => {
        console.log('Question ajoutée avec succès');
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding question:', error);
      }
    );
  }
}
