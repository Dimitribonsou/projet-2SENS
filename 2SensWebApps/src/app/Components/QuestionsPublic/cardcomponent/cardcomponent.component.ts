import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from '../../../Services/question.service';

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
  @Input()
  nbreponse:string='0'
 questionservice=inject(QuestionService)
 userauth=localStorage.getItem('jwt_token')
 ngOnInit()
 {
   const id=parseInt(this.idquestion)
   this.questionservice.ResponseCount(1).subscribe(
    (response) => {
      console.log("response serveur dimidev : " + response.nbreponse);
    },
    (error) => {
      console.error('Error getting response count:', error);
    }
  );

 }
  ReponseDetail(id:string )
  {
    if(this.userauth!=null)
    {
      const numberid=parseInt(id);
      this.router.navigateByUrl(`/reponses/${numberid}`);
    }
    else
    {
      this.router.navigateByUrl('/login')
    }
  }
  ReponseList(id:string )
  {
    if(this.userauth!=null)
    {
      const numberid=parseInt(id);
      this.router.navigateByUrl(`/reponses-users/${numberid}`);
    }
    else
    {
      this.router.navigateByUrl('/login')
    }
  }
  Signaler(id:string )
  {
    if(this.userauth!=null)
    {
      const numberid=parseInt(id);
      this.router.navigateByUrl(`/signaler/${numberid}`);
    }
    else
    {
      this.router.navigateByUrl('/login')
    }
  }
}
