import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 authservice=inject(AuthService)
 islogin:boolean=this.authservice.islogin
 nom:string='DIMIDEV'
ngOnInit()
{
  console.log("valeur de islogin dans la navabar : "+this.islogin)
  const usertoken=  localStorage.getItem('jwt_token');
  const username=  localStorage.getItem('nomutilisateur');
  if(usertoken!=null)
  {
      this.islogin=true
  }
  if(username!=null)
  {
    this.nom=username
  }
}
logout()
{
  this.authservice.logout()
}
}
