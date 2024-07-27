import { Component } from '@angular/core';
import { CardcomponentComponent } from "../../Components/QuestionsPublic/cardcomponent/cardcomponent.component";
import { InfosMenuComponent } from '../../Components/QuestionsComponents/infos-menu/infos-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-discutions',
  standalone: true,
  imports: [CardcomponentComponent,InfosMenuComponent,RouterModule],
  templateUrl: './discutions.component.html',
  styleUrl: './discutions.component.scss'
})
export default class DiscutionsComponent {

}
