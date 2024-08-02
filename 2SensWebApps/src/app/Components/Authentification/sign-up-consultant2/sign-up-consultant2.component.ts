import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-sign-up-consultant2',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './sign-up-consultant2.component.html',
  styleUrl: './sign-up-consultant2.component.scss'
})
export default class SignUpConsultant2Component {

}
