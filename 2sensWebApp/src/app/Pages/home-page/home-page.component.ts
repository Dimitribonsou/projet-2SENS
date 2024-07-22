import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";
import { HomeScreenComponent } from "../../Components/HomePageComponent/home-screen/home-screen.component";
import { AboutHomeComponent } from "../../Components/HomePageComponent/about-home/about-home.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HomeScreenComponent, AboutHomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent {

}
