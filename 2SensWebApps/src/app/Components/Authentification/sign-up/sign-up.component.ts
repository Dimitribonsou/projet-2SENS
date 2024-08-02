import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export default class SignUpComponent {

}
