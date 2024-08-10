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
    const result:boolean= this.homeservice.AddComment(this.nom,this.email,this.message);
    alert(`Hello ${this.nom} nous sommes ravi 😍 d'avoir recu votre avis et nous prendrons note `)
   this.resetForm();
  }
  resetForm()
  {
    this.nom='',
    this.email=''
    this.message=''
  }
}
