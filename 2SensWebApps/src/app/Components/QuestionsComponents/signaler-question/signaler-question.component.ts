import { Component } from '@angular/core';
import { InfosMenuComponent } from "../infos-menu/infos-menu.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-signaler-question',
  standalone: true,
  imports: [InfosMenuComponent, NavbarComponent],
  templateUrl: './signaler-question.component.html',
  styleUrl: './signaler-question.component.scss'
})
export default class SignalerQuestionComponent {

}
