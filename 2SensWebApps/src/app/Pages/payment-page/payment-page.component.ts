import { Component } from '@angular/core';
import { PaymentComponent } from "../../Components/payment/payment.component";
import { InfosMenuComponent } from "../../Components/QuestionsComponents/infos-menu/infos-menu.component";
import { NavbarComponent } from "../../Components/HomePageComponent/navbar/navbar.component";
import { FooterComponent } from "../../Components/HomePageComponent/footer/footer.component";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [PaymentComponent, InfosMenuComponent, NavbarComponent, FooterComponent],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export default class PaymentPageComponent {

}
