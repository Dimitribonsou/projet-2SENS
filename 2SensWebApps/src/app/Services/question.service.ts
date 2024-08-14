import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{questionType} from './../Types/questionType'
import { Observable, of } from 'rxjs';
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
  ListQuestions()
  {
    let listequestion : questionType[] =[]
     this.http.get(this.url.concat('/QuestionsList')).subscribe(
      (response) => {
        //recuperer la liste des questions envoyer par le back-end
        const listeresponse= response as questionType[]
        //parcourir la liste et charger dans un tableaux intermediaire pour charger un tableau qui sera utiliser pour l'affichage
        listeresponse.forEach((item)=>{

          listequestion.push(item);
        })
      },
      (error: HttpErrorResponse) => {
        listequestion=[]
        console.error('Error adding question:', error);
      }
    );
    return listequestion
  }
}
