import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export default class ForgotPasswordComponent {

}
