import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardcomponent',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './cardcomponent.component.html',
  styleUrl: './cardcomponent.component.scss'
})
export class CardcomponentComponent {
  constructor(private router:Router){}
  @Input() titre: string='Comment faire pour avoir le passport';
  @Input() description: string='Je desirais savoir toute les pieces necessaire pour obtenir un passport allant dans plus 20 pays en europe';
  @Input() date: string='20/06/2024';
  @Input() heure: any='16:35:25';
  @Input() nom: string='Bonsou dimitri';
  @Input() idquestion!: string
  @Input()
  showbtnsignaler=true
  @Input()
  showbtnrepondre=true
  @Input()
  showbtnvoirreponse=false

  ReponseDetail(id:string )
  {
    const numberid=parseInt(id);
     this.router.navigateByUrl(`/reponses/${numberid}`);
  }
  Signaler(id:string )
  {
    const numberid=parseInt(id);
     this.router.navigateByUrl(`/signaler/${numberid}`);
  }
}
