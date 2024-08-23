import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{questionType} from './../Types/questionType'
import { Observable, of } from 'rxjs';
import { ResponseType } from '../Types/responseType';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http:HttpClient) { }
  url="http://localhost:3000";
  AddQuestion(idutilisateur:number,titre:string,description:string)
  {
     this.http.post(this.url.concat('/NewQuestion'),{
      titre:titre,
      description:description,
      iduser:idutilisateur
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
  getDetailByID(id:number):questionType[]
  {
    let params=new HttpParams().set('id',id)
    let detailquestion: questionType[] =[]
    this.http.get(this.url.concat(`/QuestionDetail/${id}`)).subscribe(
     (response) => {
       //recuperer la liste des questions envoyer par le back-end
       const  detailresponse= response as questionType[]
        detailresponse.forEach((item)=>
        {
          console.log("les donnees charger est : "+item)
           detailquestion.push(item)
        })
        console.log(" le details de la question est : "+detailquestion)
        console.log(" le details retourner est : "+detailresponse)
       //parcourir la liste et charger dans un tableaux intermediaire pour charger un tableau qui sera utiliser pour l'affichage
     },
     (error: HttpErrorResponse) => {
       console.error('Error adding question:', error);
     }
   );
   return detailquestion
  }
  getQuestionsByUsers(id:number)
  {
    // return this.http.post(this.url.concat('/QuestionPerso'),{idloginUsers:id}) as Observable<questionType>;
    //utiliser la variable params pour passer les parametres a la  route
    let params=new HttpParams().set('id',id)
    let listequestions : questionType[] =[]
    this.http.get(this.url.concat(`/QuestionPerso/${id}`)).subscribe(
     (response) => {
       //recuperer la liste des questions envoyer par le back-end
       const listeresponse= response as questionType[]
       //parcourir la liste et charger dans un tableaux intermediaire pour charger un tableau qui sera utiliser pour l'affichage
       listeresponse.forEach((item)=>{
         listequestions.push(item);
       })
     },
     (error: HttpErrorResponse) => {
       listequestions=[]
       console.error('Error adding question:', error);
     }
   );
   return listequestions
  }
  AddResponse(idutilisateur:number,idquestion:number,description:string)
  {
     this.http.post(this.url.concat('/NewResponse'),{
      idquestion:idquestion,
      message:description,
      iduser:idutilisateur
    }).subscribe(
      (response) => {
        console.log('reponse  ajoutée avec succès');
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding question:', error);
      }
    );
  }
  getResponseByQuestion(id:number)
  {
    // return this.http.post(this.url.concat('/QuestionPerso'),{idloginUsers:id}) as Observable<questionType>;

    let listequestionresponses : ResponseType[] =[]
    this.http.get(this.url.concat(`/QuestionResponse/${id}`)).subscribe(
     (response) => {
       //recuperer la liste des questions envoyer par le back-end
       const listeresponse= response as ResponseType[]
       //parcourir la liste et charger dans un tableaux intermediaire pour charger un tableau qui sera utiliser pour l'affichage
       listeresponse.forEach((item)=>{
        listequestionresponses.push(item);
       })
     },
     (error: HttpErrorResponse) => {
      listequestionresponses=[]
       console.error('Error adding response:', error);
     }
   );
   return listequestionresponses
  }
  AddSignal(id:number,titre:string,description:string)
  {
     this.http.post(this.url.concat('/NewSignal'),{
      titre:titre,
      description:description,
      idquestion:id
    }).subscribe(
      (response) => {
        console.log('Signalement  enregistrer avec succès');
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding signalement:', error);
      }
    );
  }
  ResponseCount(id: number): Observable<{ nbreponse: string }> {
    return this.http.get<{ nbreponse: string }>(this.url.concat(`/ResponseCount/${id}`));
  }

}
