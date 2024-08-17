import { Component, inject } from '@angular/core';
import { InfosMenuComponent } from "../infos-menu/infos-menu.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionService } from '../../../Services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signaler-question',
  standalone: true,
  imports: [InfosMenuComponent, NavbarComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './signaler-question.component.html',
  styleUrl: './signaler-question.component.scss'
})
export default class SignalerQuestionComponent {
  constructor(private ActiveRoute:ActivatedRoute,private router:Router){}
  libelle:string=""
  description:string=""
  formsignaler:FormGroup=new FormGroup({
    titre:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required,Validators.minLength(50)]),
    checkbox:new FormControl('',[Validators.required]),
  })
  questionservice=inject(QuestionService)
  SendSignal()
  {
    const id=this.ActiveRoute.snapshot.paramMap.get('id') as string;
    const idquestion=parseInt(id)
    console.log(idquestion)
    this.questionservice.AddSignal(idquestion,this.libelle,this.description)
    this.resetForm();
    this.router.navigateByUrl('/questions');
  }
  resetForm()
  {
    this.libelle='',
    this.description=''
  }
}
