import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent,ReactiveFormsModule,FormsModule],
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
        const islogin:boolean =  this.authservice.isUserLogin(this.email,this.password)
          console.log(" islogin : ",islogin)
       if(islogin)
       {
        // rediriger vers la section des discutions
        this.router.navigateByUrl('/discutions')
        console.log("utilisateur connecter");
       }
       else
       {
        this.resetForm() ;
        console.log("Erreur de connection !");
       }
  }
  resetForm()
  {
    this.password=''
  }
}
