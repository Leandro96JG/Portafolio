import { Component, inject } from '@angular/core';
import { fadeInTitle } from '../../animations/fadeIn/fade-in-tittle';
import { fadeInTitle3 } from '../../animations/fadeIn/fade-in-tittle3';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  animations:[
    fadeInTitle,
    fadeInTitle3
  ]
})
export class ContactoComponent {

  private fb = inject(FormBuilder);

  public emailForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.minLength(4)]],
  })


  isValidField(field:string):boolean | null{
    return this.emailForm.controls[field].errors && this.emailForm.controls[field].touched
   }



}
