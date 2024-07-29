import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardcomponent',
  standalone: true,
  imports: [NgIf,RouterModule],
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
