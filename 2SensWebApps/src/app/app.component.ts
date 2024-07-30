import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/HomePageComponent/navbar/navbar.component";
import { FooterComponent } from "./Components/HomePageComponent/footer/footer.component";
import { NavigationService } from './Services/navigation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2SensWebApps';
  ps =  inject(NavigationService)

  navbarShow:boolean=this.ps.IsnavActive

}
