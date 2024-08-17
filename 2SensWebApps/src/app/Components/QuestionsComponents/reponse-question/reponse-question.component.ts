import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReponseItemComponent } from "../reponse-item/reponse-item.component";
import { DatePipe, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionService } from '../../../Services/question.service';
import { questionType } from '../../../Types/questionType';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reponse-question',
  standalone: true,
  imports: [RouterModule, ReponseItemComponent,NgIf,ReactiveFormsModule,FormsModule,DatePipe,ReactiveFormsModule,FormsModule],
  templateUrl: './reponse-question.component.html',
  styleUrl: './reponse-question.component.scss'
})
export default class ReponseQuestionComponent {
  constructor(private router:Router,private ActiveRoute:ActivatedRoute){}
  questionservice=inject(QuestionService)
  questiondetail!:questionType[]
  response:string=""
  formresponse:FormGroup=new FormGroup({
    response:new FormControl('',[Validators.required,Validators.minLength(100)])
  })
ngOnInit()
{
   const id=this.ActiveRoute.snapshot.paramMap.get('id') as string;
   console.log(id)
   const idquestion=parseInt(id)
 this.questiondetail=  this.questionservice.getDetailByID(idquestion)
}
  goTodiscution()
  {
      this.router.navigateByUrl('/discutions');
  }
  SendResponse(id:string)
  {
    const idquestion=parseInt(id);
    this.questionservice.AddResponse(idquestion,this.response);
    console.log("reponse ajouter a la question : "+idquestion)
  }
}
