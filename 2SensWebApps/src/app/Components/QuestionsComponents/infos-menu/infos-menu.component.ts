import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infos-menu',
  standalone: true,
  imports: [],
  templateUrl: './infos-menu.component.html',
  styleUrl: './infos-menu.component.scss'
})
export class InfosMenuComponent {
 @Input()
 libelle="New infos"

 @Input()
 description="Vous etes sur le point d’avoir la solution a votre preocupation"


}
