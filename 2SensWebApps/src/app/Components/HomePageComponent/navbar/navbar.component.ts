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
  if(this.islogin)
  {
    this.nom=this.authservice.userData.nom
  }
}

}
