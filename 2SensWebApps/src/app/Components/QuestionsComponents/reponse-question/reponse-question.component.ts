import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReponseItemComponent } from "../reponse-item/reponse-item.component";

@Component({
  selector: 'app-reponse-question',
  standalone: true,
  imports: [RouterModule, ReponseItemComponent],
  templateUrl: './reponse-question.component.html',
  styleUrl: './reponse-question.component.scss'
})
export default class ReponseQuestionComponent {

}
