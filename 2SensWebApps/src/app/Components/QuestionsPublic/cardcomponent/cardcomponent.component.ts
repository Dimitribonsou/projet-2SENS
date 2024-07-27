import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cardcomponent.component.html',
  styleUrl: './cardcomponent.component.scss'
})
export class CardcomponentComponent {
  @Input()
  showbtnsignaler=true
  @Input()
  showbtnrepondre=true
  @Input()
  showbtnvoirreponse=false
}
