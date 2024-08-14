import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export default class SignUpComponent {
  constructor(private   router: Router){}
  nom:string=''
  email:string=''
  telephone:string=''
  password:string=''
  formsignup:FormGroup=new FormGroup(
    {
       nom:new FormControl('', [Validators.required,Validators.maxLength(50)]),
       email:new FormControl('', [Validators.required,Validators.email]),
       telephone:new FormControl('',[Validators.required]),
       password:new FormControl('',[Validators.required,Validators.minLength(8)]),

    }
  )
  authservice=inject(AuthService)

  SendData()
  {
              //inserer les infos de la question dans la base de donnee
        this.authservice.CreateAccount(this.nom,this.password,this.email,this.telephone)
        //vider les champ du formulaire
        this.resetForm() ;
        // rediriger vers la section des discutions
        this.router.navigateByUrl('/login')
  }
  resetForm()
  {
    this.nom=''
    this.email=''
    this.telephone=''
    this.password=''
  }
}
