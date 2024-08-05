import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomepageService } from '../../../Services/homepage.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  commentForm:FormGroup=new FormGroup({
    nom:new FormControl('', [Validators.required] ),
    email:new FormControl('', [Validators.required,Validators.email] ),
    message:new FormControl('', [Validators.required,Validators.minLength(15)] )
  })
  nom!:string
  email!:string
  message!:string
   homeservice=inject(HomepageService)
  SendComment()
  {
    // alert(`hello ${this.nom} je vais envoyer votre email ${this.email} avec votre message : ${this.message} `)
   const result:boolean= this.homeservice.AddComment(this.nom,this.email,this.message);
   this.resetForm();
  }
  resetForm()
  {
    const nom  =document.getElementById('name') as HTMLInputElement;
    const email =document.getElementById('email') as HTMLInputElement;
    const descritpion =document.getElementById('description') as HTMLInputElement;
     nom.innerHTML='';
     email.innerHTML='';
     descritpion.innerHTML='';
  }
}
