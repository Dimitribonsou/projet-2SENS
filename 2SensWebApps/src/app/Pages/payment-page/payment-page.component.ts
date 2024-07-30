import { Component } from '@angular/core';
import { PaymentComponent } from "../../Components/payment/payment.component";
import { InfosMenuComponent } from "../../Components/QuestionsComponents/infos-menu/infos-menu.component";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [PaymentComponent, InfosMenuComponent],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export default class PaymentPageComponent {

}
