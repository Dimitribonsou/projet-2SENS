import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { loginType } from '../../../Types/loginType';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent,ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private   router: Router){}
  email:string=''
  password:string=''
  formlogin:FormGroup=new FormGroup(
    {
       email:new FormControl('', [Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    }
  )
  authservice=inject(AuthService)

  SendData()
  {
        //inserer les infos de la question dans la base de donnee
         this.authservice.isUserLogin(this.email,this.password).subscribe(
          (response)=>{
            //stocker les s de l'utilisateur dans le localstorage
            if(response.token!=undefined)
            {
              const  tokenlogin=response.token.toString()
               localStorage.setItem('jwt_token',tokenlogin );
               localStorage.setItem('nomutilisateur',response.nom );
               localStorage.setItem('idusers',response.iduser.toString());
              }
          //verifier si la variable userlogin existe si oui modifier la valeur de la variable islogin du service authservice
            const userlogin=  localStorage.getItem('jwt_token');
            if(userlogin!=null)
              {
                this.authservice.islogin=true
                console.log(" valeur de test d'authentification : "+this.authservice.islogin)
                   // Redirection vers la page d'accueil
                 this.router.navigateByUrl('/discutions')
              }
              else
              {
                this.resetForm()
                this.router.navigateByUrl('/login')
              }
          }
         )

  }
  resetForm()
  {
    this.password=''
  }
}
