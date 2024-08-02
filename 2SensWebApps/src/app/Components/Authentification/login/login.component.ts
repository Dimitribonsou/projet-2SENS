import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

}
