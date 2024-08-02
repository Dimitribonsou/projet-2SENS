import { Component } from '@angular/core';
import { FormcomponentComponent } from "../../Components/QuestionsComponents/formcomponent/formcomponent.component";
import { InfosMenuComponent } from "../../Components/QuestionsComponents/infos-menu/infos-menu.component";
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [FormcomponentComponent, InfosMenuComponent, FooterComponent, NavbarComponent],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss'
})
export default class QuestionPageComponent {

}
