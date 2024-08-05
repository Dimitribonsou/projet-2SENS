import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomepageService } from '../../../Services/homepage.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-subcribe',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ,JsonPipe],
  templateUrl: './subcribe.component.html',
  styleUrl: './subcribe.component.scss'
})
export class SubcribeComponent {
  homeservice=inject(HomepageService)
  emailForm:FormGroup=new FormGroup(
    {
      emailAdress:new FormControl('',[Validators.required ,Validators.email]),
    }
  )
  email :string=""
  SendData( emailusers:string)
  {
    // alert(`je vais envoyer l'email ${emailusers} tkt pas`)
    const result=  this.homeservice.AddAdresse(emailusers);
    this.resetForm()
  }
  resetForm()
  {
    const email =document.getElementById('email') as HTMLInputElement;
     email.innerHTML='';
  }
}
