import { Component, inject } from '@angular/core';
import { CardcomponentComponent } from "../../Components/QuestionsPublic/cardcomponent/cardcomponent.component";
import { InfosMenuComponent } from '../../Components/QuestionsComponents/infos-menu/infos-menu.component';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";
import { questionType } from '../../Types/questionType';
import { QuestionService } from '../../Services/question.service';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-discutions',
  standalone: true,
  imports: [CardcomponentComponent, InfosMenuComponent, RouterModule, NavbarComponent, FooterComponent,DatePipe,NgFor],
  templateUrl: './discutions.component.html',
  styleUrl: './discutions.component.scss'
})
export default class DiscutionsComponent {
  constructor(private router: Router){}
  questionservice=inject(QuestionService)
  listeUsersQuestion:questionType[]=[]
  ngOnInit()
  {
    const userIds=  localStorage.getItem('idusers');
    if(userIds!=null)
      {
        const id=parseInt(userIds)
        this.listeUsersQuestion = this.questionservice.getQuestionsByUsers(id)
      }
  }
}
