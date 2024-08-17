import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reponse-item',
  standalone: true,
  imports: [],
  templateUrl: './reponse-item.component.html',
  styleUrl: './reponse-item.component.scss'
})
export class ReponseItemComponent {
  @Input()
   username:string ="dimidev"
  @Input()
   message :string="message description"
  @Input()
   heure:any="message time"
  @Input()
   numero:any=1
}
