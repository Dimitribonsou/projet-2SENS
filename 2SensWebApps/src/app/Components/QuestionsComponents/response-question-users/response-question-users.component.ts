import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReponseItemComponent } from '../reponse-item/reponse-item.component';

@Component({
  selector: 'app-response-question-users',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,NgIf,FormsModule,ReponseItemComponent],
  templateUrl: './response-question-users.component.html',
  styleUrl: './response-question-users.component.scss'
})
export default class ResponseQuestionUsersComponent {
  constructor(private router:Router){}
  goTodiscution()
  {
      this.router.navigateByUrl('/discutions')
  }
}
