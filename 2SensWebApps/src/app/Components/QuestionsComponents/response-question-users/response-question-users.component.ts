import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReponseItemComponent } from '../reponse-item/reponse-item.component';
import { QuestionService } from '../../../Services/question.service';
import { questionType } from '../../../Types/questionType';
import { ResponseType } from '../../../Types/responseType';

@Component({
  selector: 'app-response-question-users',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,NgIf,FormsModule,ReponseItemComponent,DatePipe,NgFor],
  templateUrl: './response-question-users.component.html',
  styleUrl: './response-question-users.component.scss'
})
export default class ResponseQuestionUsersComponent {
  constructor(private router:Router,private ActiveRoute:ActivatedRoute){}
  questionservice=inject(QuestionService)
  questiondetail!:questionType[]
  responseQuestion:ResponseType[]=[]
  goTodiscution()
  {
      this.router.navigateByUrl('/discutions')
  }
  ngOnInit()
  {
    const id=this.ActiveRoute.snapshot.paramMap.get('id') as string;
    console.log(id)
    const idquestion=parseInt(id)
  this.questiondetail=  this.questionservice.getDetailByID(idquestion)
  this.responseQuestion=this.questionservice.getResponseByQuestion(idquestion)
  }
}
