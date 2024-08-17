import { Component, inject } from '@angular/core';
import { InfosMenuComponent } from "../../Components/QuestionsComponents/infos-menu/infos-menu.component";
import { CardcomponentComponent } from "../../Components/QuestionsPublic/cardcomponent/cardcomponent.component";
import { RouterModule } from '@angular/router';
import ReponseQuestionComponent from '../../Components/QuestionsComponents/reponse-question/reponse-question.component';
import SignalerQuestionComponent from '../../Components/QuestionsComponents/signaler-question/signaler-question.component';
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { QuestionService } from '../../Services/question.service';
import { questionType } from '../../Types/questionType';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-public',
  standalone: true,
  imports: [InfosMenuComponent, CardcomponentComponent, RouterModule, ReponseQuestionComponent, SignalerQuestionComponent, FooterComponent, NavbarComponent,NgFor,AsyncPipe,DatePipe],
  templateUrl: './question-public.component.html',
  styleUrl: './question-public.component.scss'
})
export default class QuestionPublicComponent {
  questionservice=inject(QuestionService)
   listeQuestion:questionType[] = this.questionservice.ListQuestions()
   reponse!:any[]
   nbReponse(idquestion:string)
   {

     const id=parseInt(idquestion)
       const  reponse=this.questionservice.ResponseCount(id)
      console.log("nombre de reponse : "+reponse[0])
      return reponse
   }
   ngOnInit()
   {
    console.log("fonction : "+this.nbReponse('1'))
     const nb=this.nbReponse('1')
     console.log("le nombre de reponse est : "+nb[0])

     console.log("this : "+this.reponse)
   }

}
