import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export default class AboutPageComponent {

}
