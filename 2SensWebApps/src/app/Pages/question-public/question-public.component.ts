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
   ngOnitInit()
   {

      this.listeQuestion.forEach((q)=>
        {
          console.log("questions final : "+q)
        })

   }
   ConvertToInt(id:string)
   {
     return parseInt(id);
   }
}
