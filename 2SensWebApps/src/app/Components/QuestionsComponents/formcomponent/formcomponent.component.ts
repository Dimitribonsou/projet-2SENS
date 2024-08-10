import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from '../../../Services/question.service';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-formcomponent',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './formcomponent.component.html',
  styleUrl: './formcomponent.component.scss'
})
export class FormcomponentComponent {
  constructor(private router:Router){}
  titre:string=''
  description:string=''
  formquestion:FormGroup=new FormGroup(
    {
       titre:new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description:new FormControl('', [Validators.required,Validators.minLength(100)]),
       confirmation:new FormControl('',[Validators.required]),
       image1:new FormControl('',[Validators.nullValidator]),
       image2:new FormControl('',[Validators.nullValidator]),
       image3:new FormControl('',[Validators.nullValidator]),
    }
  )
  questionservice=inject(QuestionService)
  authservice=inject(AuthService)
  SendData()
  {
    //verifier si les information de connection de l'utilisateur existe si c'est le cas cela supose qu'il est connecter
    const loginInfo= this.authservice.userData
    if(loginInfo != null)
    {
              //inserer les infos de la question dans la base de donnee
        this.questionservice.AddQuestion(this.titre,this.description)
        //vider les champ du formulaire
        this.resetForm() ;
        // rediriger vers la section des discutions
        this.router.navigateByUrl('/discutions')
    }
    else
    {
      //dans le cas l'utilisateur n'est pas encore connecter on le redirige vers la page de login
      this.router.navigateByUrl('/login')
    }

  }
  resetForm()
  {
    this.titre=''
    this.description=''
  }
}
