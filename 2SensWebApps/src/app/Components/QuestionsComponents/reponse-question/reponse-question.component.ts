import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReponseItemComponent } from "../reponse-item/reponse-item.component";
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reponse-question',
  standalone: true,
  imports: [RouterModule, ReponseItemComponent,NgIf,ReactiveFormsModule,FormsModule],
  templateUrl: './reponse-question.component.html',
  styleUrl: './reponse-question.component.scss'
})
export default class ReponseQuestionComponent {
  constructor(private router:Router){}

  goTodiscution()
  {
      this.router.navigateByUrl('/discutions');
  }
}
