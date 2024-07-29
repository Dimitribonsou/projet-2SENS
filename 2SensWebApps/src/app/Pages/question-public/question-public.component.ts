import { Component } from '@angular/core';
import { InfosMenuComponent } from "../../Components/QuestionsComponents/infos-menu/infos-menu.component";
import { CardcomponentComponent } from "../../Components/QuestionsPublic/cardcomponent/cardcomponent.component";
import { RouterModule } from '@angular/router';
import ReponseQuestionComponent from '../../Components/QuestionsComponents/reponse-question/reponse-question.component';
import SignalerQuestionComponent from '../../Components/QuestionsComponents/signaler-question/signaler-question.component';

@Component({
  selector: 'app-question-public',
  standalone: true,
  imports: [InfosMenuComponent, CardcomponentComponent,RouterModule,ReponseQuestionComponent,SignalerQuestionComponent],
  templateUrl: './question-public.component.html',
  styleUrl: './question-public.component.scss'
})
export default class QuestionPublicComponent {

}
