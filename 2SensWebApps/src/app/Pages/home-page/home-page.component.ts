import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";
import { HomeScreenComponent } from "../../Components/HomePageComponent/home-screen/home-screen.component";
import { AboutHomeComponent } from "../../Components/HomePageComponent/about-home/about-home.component";
import { ServiceSectionComponent } from "../../Components/HomePageComponent/service-section/service-section.component";
import { PartenaireComponent } from "../../Components/HomePageComponent/partenaire/partenaire.component";
import { StatistiqueComponent } from "../../Components/HomePageComponent/statistique/statistique.component";
import { CommentaireComponent } from "../../Components/HomePageComponent/commentaire/commentaire.component";
import { SubcribeComponent } from "../../Components/HomePageComponent/subcribe/subcribe.component";
import { ContactComponent } from "../../Components/HomePageComponent/contact/contact.component";
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HomeScreenComponent, AboutHomeComponent, ServiceSectionComponent, PartenaireComponent, StatistiqueComponent, CommentaireComponent, SubcribeComponent, ContactComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {

}
