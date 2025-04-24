import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // Déclaration d'un formulaire appelé "myForm" composé des champs firstname et lastname
  // myForm = new FormGroup({
  //   firstname: new FormControl('', Validators.required),
  //   lastname: new FormControl('Doe'),
  //   email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)])
  // });

  // L'utilisation d'un FormBuilder permet de simplifier la syntaxe du formulaire.
  // Son fonctionnement est le même que FormGroup
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['Doe'],
    email: ['', [Validators.required, Validators.email, Validators.minLength(10)]]
  });

  // private fb = inject(FormBuilder);

  // myForm = this.fb.group({
  //   firstname: ['', Validators.required],
  //   lastname: ['Doe'],
  //   email: ['', [Validators.required, Validators.email, Validators.minLength(10)]]
  // });


  // username: string = '';
  // age: number = 0;


  onSubmit() {

    console.log(this.myForm.value);

    if (this.myForm.valid) {
      console.log("Le formulaire est valide !");
    } else {
      console.log("Formulaire invalide !");
    }
  }

  // onSubmitTemplateForm() {
  //   console.log("Nom d'utilisateur : " + this.username);
  //   console.log("Age : " + this.age);
  // }

}
