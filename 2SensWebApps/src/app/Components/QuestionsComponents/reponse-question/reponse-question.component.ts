import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReponseItemComponent } from "../reponse-item/reponse-item.component";
import { NavigationService } from '../../../Services/navigation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reponse-question',
  standalone: true,
  imports: [RouterModule, ReponseItemComponent,NgIf],
  templateUrl: './reponse-question.component.html',
  styleUrl: './reponse-question.component.scss'
})
export default class ReponseQuestionComponent {
  navigationservice=inject(NavigationService)
  ngOnInit()
  {
     this.navigationservice.showNabarComponent(false);
    //  alert(this.navigationservice.IsnavActive)
  }
}
