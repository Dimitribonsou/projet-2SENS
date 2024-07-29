import { Component } from '@angular/core';
import { InfosMenuComponent } from "../infos-menu/infos-menu.component";

@Component({
  selector: 'app-signaler-question',
  standalone: true,
  imports: [InfosMenuComponent],
  templateUrl: './signaler-question.component.html',
  styleUrl: './signaler-question.component.scss'
})
export default class SignalerQuestionComponent {

}
